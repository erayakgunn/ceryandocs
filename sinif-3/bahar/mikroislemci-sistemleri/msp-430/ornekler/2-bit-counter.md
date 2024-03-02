# 2 Bit Sayıcı

Bu örnekte kartın üzerindeki butona basılarak kırmızı ve yeşil LED'in binary'ye uygun bir şekilde yakılıp söndürülmesi sağlanır.

```c
#include <msp430g2553.h>

#define LED1 BIT0
#define LED2 BIT6
#define BUTTON BIT3
// Anlaşılma kolaylığı açısından LED'ler ve buton tanımlandı.

unsigned char count = 0;

void configWDT(void) {
  WDTCTL = WDTPW | WDTHOLD; //Watchdog timer durduruldu
}

void configPins(void) {
  P1DIR |= 0x41; // LED1 ve LED2 çıkış olarak ayarlandı.
  P1REN |= 0x08; // Buton için pull-up rezistör aktifleştirildi.
  P1OUT |= 0x08; // P1.3 pininin hep 1 kalması sağlandı.
}

void updateLeds(void) {
  count++; // Sayı arttırıldı
  count = count % 4;

  switch (count) {
  case 0:
    P1OUT &= ~(LED1 + LED2); // LED'ler söndürüldü.
    break;
  case 1:
    P1OUT |= LED2;  // LED2 yakıldı.
    P1OUT &= ~LED1; // LED1 söndürüldü.
    break;
  case 2:
    P1OUT |= LED1;  // LED1 yakıldı.
    P1OUT &= ~LED2; // LED2 söndürüldü.
    break;
  case 3:
    P1OUT |= LED1 + LED2; // LED'ler yakıldı.
    break;
  }
}

void main(void) {
  configWDT();
  configPins();
  // main fonksiyonunun basitleşmesi için konfigürasyonlar
  // fonksiyonlara bölündü
  while (1) {
    if ((P1IN & BUTTON) == 0) {
    // Butona basıldığında bu kısım çalışır
      __delay_cycles(5000);
      // Butona basıldığında temiz bir sonuç almak için gecikme yapıldı
      updateLeds();
      // LED'lerin güncellenmesi sağlanır
    }
  }
}

```