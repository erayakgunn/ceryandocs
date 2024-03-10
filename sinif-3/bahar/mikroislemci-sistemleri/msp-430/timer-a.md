# Timer A

Timer A; clock pulselarını sayan, 16-bit register TAR'a sahip bir zamanlayıcıdır. Genellikle tetikleme ve çıkışları doğrudan sürmede kullanılan birkaç capture/compare (yakalama/karşılaştırma) kanalına da sahiptir. Donanımsal olarak iki ana parçadan oluşur.

## Zamanlayıcı Bloğu

16-bit register TAR'a sahip çekirdektir. Frekansları ölçeklendirilebilen clock seçeneği vardır. Sayıcı 0 döndürüp TAIFG flagi aktif olmadığı sürece zamanlayıcı bloğu herhangi bir çıkış vermez.

## Capture/Compare Kanalları

Çoğu olayın gerçekleştiği bu kanallar TACCRx registerlarına dayanır. TACCR0 hariç hepsi benzer bir çalışma yapısına sahiptir. Tüm kanallar aşağıdaki eylemleri gerçekleştirebilir.

* **Capture** (Giriş Yakalama)

    Girişin TACCRx'teki değerini yani zamanı sayma.

* **Compare** (Karşılaştırma)
    
    TAR'daki anlık değeri TACCRx'teki değerle karşılaştırıp eşit olduklarında çıkışı değiştirme. Çıkış harici veya dahili olabilir.

* **Interrupt Oluşturma**

    Seçili CCIFG flagini değiştirerek interrupt oluşturulabilir.

* **Sample Alma** 

    Karşılaştırma yaparken girişi sample alma. Özel bir arayüzü olmayan bir cihazda seri haberleşirken A zamanlayıcısı kullanıldığında özellikle kullanışlıdır.

    ---

![alt text](/306_1.png)

## Sabit Gecikme Oluşturma

Sabit bir gecikme oluşturmanın en basit yolu TAR'ı beklemektir. Timer_A Control Register TACTL'ye ihtiyaç duyulur.

![alt text](/image-1.png)

## Clocklar

![alt text](/307_1.png)

## Bitler
1. TAR (Timer Counter Register): Timer A'daki anlık değeri tutar.
2. TACCRx (Timer Capture/Compare Register): Compare modunda, TAR'a karşı karşılaştırılacak değeri tutar. Capture modunda ise capture edildikten sonra anlık TAR değerini tutar. 16 bit register kullanıldığı için maksimum değeri 0xFFFF'tir.
3. TACTL (Control Register): Timer A'yı konfigüre etmek için kullanılır. Bu register aşağıdaki gibi bölünür:
  * Bit[0] – TAIFG: Timer_A Interrupt Flagi. 0 iken interrupt yoktur, 1 iken interrupt gönderilir.
  * Bit[1] – TAIE: Timer_A Interrupt Enable. 0 iken interrupt devre dışı bırakılır, 1 iken interrupt oluşturulmasına izin verilir.
  * Bit[2] – TACLR: Timer_A clear. 1 olarak ayarlamak TAR'ı, bölücüyü ve sayma yönünü sıfırlar. Otomatik olarak sıfırlanır ve her zaman 0 olarak okunur.
  * Bits[5:4] – MCx – Mode Control bits. Timer 4 moda sahiptir.
      - Stop(0): Güç tasarrufu için varsayılan olarak seçilidir. Tüm registerlar (TAR da dahil) zamanlayıcı tekrar çalıştığında kaldıkları yerden devam etmek için değerlerini korurlar.
      - Continuous (2): Sayıcı 0x0000'ten 0xFFFF'e sürekli bir şekilde sayar ve sonrasında tekrar 0'dan yeniden sayar. Periyot $2^{16}$ yani 65,536'dır.
      - Up(1): Sayıcı 0'dan TACCRx'teki değere kadar yukarı sayar. Bitiminde tekrar 0 değerini alır. Periyot TACCRx + 1'dir. Örneğin TACCRx 3 değerini aldığında 0, 1, 2, 3, 0... şeklinde devam eder. Bu mod PWM'deki gibi genellikle tüm kanallar aynı frekansta çıkış sağladığında kullanılır.
      - Up/Down(3): Sayıcı 0'dan TACCRx'teki değere kadar yukarı sayar, sonrasında tekrar 0'a doğru aşağı sayar. Periyot  2*TACCRx'tir. Örneğin TACCRx 3 değerini aldığında 0, 1, 2, 3, 2, 1, 0, 1... şeklinde devam eder.
  * Bit[7:6] – IDx – Input divider. Clock girişi bölücüsünü seçer.
    * [00] = ID_0 – /1
    * [01] = ID_1 – /2
    * [10] = ID_2 – /4
    * [11] = ID_3 – /8
  * Bits[9:8] TASSELx: Timer_A clock source select. Kaynak için 4 seçenek vardır: iç kaynaklardan SMCLK veya ACLK ya da dış kaynaklardan TACLK veya INCLK.
    * [00] = TASSEL_0 – TACLK
    * [01] = TASSEL_1 – ACLK
    * [10] = TASSEL_2 – SMCLK
    * [11] = TASSEL_3 – INCLK 
4. TACCTLx – Capture/Compare Control Register: Capture/Compare seçeneklerini konfigüre etmek için kullanılır. Burada sadece bazı kısımlarına değineceğiz. Diğer detayları PWM'i anlatırken göstereceğiz.
    * Bit[0] – CCIFG : Capture/compare interrupt flag. 0 iken interrupt yoktur, 1 iken interrupt gönderilir.
    * Bit[4] – CCIE : Capture/compare interrupt enable. 0 iken İlgili flagin interrupt isteği devre dışı bırakılır, 1 iken interrupt oluşturulmasına izin verilir.
    * Bit[8] – CAP : Capture mode. Compare veya Capture modunu seçmek için kullanılır. 0 = Compare, 1 = Capture.
5. TAIV – Interrupt Vector Register: Hangi flagin interrupt istediğini anlamak için kullanılır. Sadece okunabilir ve TAIVx ile adlandırılan 3 biti kullanır. TAIVx'in değerleri ve anlamları aşağıdaki gibidir.
   * 0x00 = No Interrupt Pending.
   * 0x02 = Capture/Compare 1 – TACCR1 CCIFG.
   * 0x04 = Capture/Compare 2 – TACCR2 CCIFG.
   * 0x0A = Timer(TAR) Overflow – TAIFG.
   * Diğerleri – Rezerve.

## Adlandırma

::: danger DİKKAT!
Register isimlerini kullanıcı kılavuzundaki gibi kullanmak Timer0_A3 özgüdür. Örneğin TACTL TA0CTL ile aynıdır. Timer registerlarının TAxCTL, TAxCCR0 gibi adlandırıldığını unutmayın(x = Timer modül numarası). Örneğin Timer1_A3 için bu isimler TA1CTL, TA1CCR0 şeklinde olacaktır. TA0CTL ve diğer Timer0_A3; kullanım kolaylığı için TACTL, TACCR0 şeklinde bir daha tanımlanmıştır.
:::

## Delay Hesapları için Kullanışlı Formüller

TAR değerini 1 artırmak için gerekli zaman aşağıdaki gibidir.

* TAR Başına Gecikme $=$ DIV $/$  Input Clock (Hz)
  * DIV = Input Clock divider. 1, 2, 4 veya 8.

TAR değerinin 0'dan TACCR0'a ulaşana kadar geçen süre aşağıdaki gibidir.

Periyot (saniye) $=$ DIVx(TACCR0+1) $/$ Input Clock (Hz)

  * Örneğin bölücü 2, clock 4Mhz ve TACCR0 999 olarak girildiğinde

  Periyot $=$ $2*(999+1)\over 4*10^6Hz$ $=0.5*1000*10^{-6}S = 500 \mu S$
  