# LED Yakıp Söndürme

Bu örnekte kartın üzerindeki butona basılarak LED'in yakılıp söndürülmesi sağlanır.

## Butona basıldığında yakma

```c
#include "msp430g2553.h"
#include <msp430.h>
int main(void) {
  WDTCTL = WDTPW | WDTHOLD;
  // Watchdog Timer'ı durdurur.
  P1DIR |= 0x40;
  // P1.6 pinini çıkış olarak ayarlar.
  P1REN |= 0x08;
  // P1.3 pinine pull-up rezistör ekler.
  P1OUT = 0x00;
  // Başlangıçta tüm 1. pinleri 0 olarak ayarlar.
  while (1) {
    // while 1 sayesinde kartın sürekli çalışması sağlanır.
    if (P1IN & BIT3) {
    // Pull-up rezistörü olduğu için düğmeye basmadığımızda
    // aşağıdaki kod çalışır.
      P1OUT = P1OUT & ~BIT6;
    // LED söndürülür.
    } else {
      P1OUT = P1OUT | BIT6;
    // Butona bastığımızda  P1.6 pini 1 değerini alır ve LED yanar.
    }
  }
}
```

## Butona basıldığında 1 saniye boyunca yakma

```c
#include "msp430g2553.h"
#include <msp430.h>
int main(void) {
  WDTCTL = WDTPW | WDTHOLD;
  // Watchdog Timer'ı durdurur.
  P1DIR |= 0x40;
  // P1.6 pinini çıkış olarak ayarlar.
  P1REN |= 0x08;
  // P1.3 pinine pull-up rezistör ekler.
  P1OUT = 0x00;
  // Başlangıçta tüm 1. pinleri 0 olarak ayarlar.
  while (1) {
    // while 1 sayesinde kartın sürekli çalışması sağlanır.
    if (P1IN & BIT3) {
    // Pull-up rezistörü olduğu için düğmeye basmadığımızda
    // aşağıdaki kod çalışır.
      P1OUT = P1OUT & ~BIT6;
    // LED söndürülür.
    } else {
      P1OUT = P1OUT | BIT6;
    // Butona bastığımızda  P1.6 pini 1 değerini alır ve LED yanar.
    __delay_cycles(1000000);
    // Bu fonksiyon mikro saniye cinsinden parametre alır.
    // 1000 0000 mikro saniye = 1 saniye
    // Bu fonksiyon sayesinde 1 saniye boyunca yanık kalması sağlanır.
    // 1 saniye geçtikten sonra else içerisindeki kod bloğu tamamlanır
    // ve daha sonrasında kendiliğinden LED kendiliğinden söner.
    }
  }
}
```