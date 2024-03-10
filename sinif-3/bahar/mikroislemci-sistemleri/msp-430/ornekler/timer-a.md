# Timer A Örneği

Bu örnekte Timer A ile SMCLK Clocku ile istenilen periyotlarla 3 bit sayıcı çalıştıracağız. Aşağıdaki formül ile periyodu istediğiniz gibi değiştirebilirsiniz.

::: info Formül
Periyot (saniye) $=$ DIVx(TACCR0+1) $/$ Input Clock (Hz)

  * Örneğin bölücü 2, clock 4Mhz ve TACCR0 999 olarak girildiğinde

  Periyot $=$ $2*(999+1)\over 4*10^6Hz$ $=0.5*1000*10^{-6}S = 500 \mu S$
:::

```c
#include <msp430g2553.h>

#define LED1 BIT0
#define LED2 BIT1
#define LED3 BIT2

unsigned char count = 0;
unsigned int overflowCount;

void configTimers(void) {
  WDTCTL = WDTPW | WDTHOLD; // watchdog timer durdurulur

  // MCLK = SMCLK = 1MHz olarak ayarlanır
  BCSCTL1 = CALBC1_1MHZ;
  DCOCTL = CALDCO_1MHZ;

  TACCTL0 |= CCIE; // Timer interruptına izin verilir

  // Periyodu ayarlamak için aşağıdaki formül kullanılır
  // Period = (InputDivider * (TA0CCR0 + 1) * MaxOverflowCount)/ ClockFrequency
  // bu örnekte biz bunu kullandık (8*(750)*1000)/1_000_000
  // which is 6 second
  TA0CCR0 = 750 - 1; // Yukarıdaki formüle göre hesaplanır

  // TASSEL_2  SMCLK clockunu aktifleştirir
  // MC_1 up modunu aktifleştirir
  // TACLR timerı temizler
  // Input Clock Divider = 8
  TA0CTL |= TASSEL_2 | MC_1 | TACLR | ID_3;
}

void configPins(void) {
  P1OUT = 0x00;
  P1DIR |= (BIT0 + BIT1 + BIT2); // LED1, LED2, LED3 çıkış olarak ayarlandı
}

void updateLeds(void) {
  // sayı arttırılır
  ++count;
  // sayının modu alınır
  switch (count % 8) {
  case 0:
    P1OUT &= ~(LED1 + LED2 + LED3);
    break;
  case 1:
    P1OUT |= LED1;
    P1OUT &= ~(LED2 + LED3);
    break;
  case 2:
    P1OUT |= LED2;
    P1OUT &= ~(LED1 + LED3);
    break;
  case 3:
    P1OUT |= (LED1 + LED2);
    P1OUT &= ~(LED3);
    break;
  case 4:
    P1OUT |= LED3;
    P1OUT &= ~(LED1 + LED2);
    break;
  case 5:
    P1OUT |= (LED1 + LED3);
    P1OUT &= ~(LED2);
    break;
  case 6:
    P1OUT |= (LED2 + LED3);
    P1OUT &= ~(LED1);
    break;
  case 7:
    P1OUT |= (LED1 + LED2 + LED3);
    break;
  }
  
}

void main(void) {
  configTimers();         // watchdog timer ayarı
  configPins();           // pin ayarı
  __bis_SR_register(GIE);
  while (1);
}


#pragma vector = TIMER0_A0_VECTOR
__interrupt void Timer_A0() {
  overflowCount++;
  // 1000 periyot hesabında kullanılan katsayıdır.
  if (overflowCount >= 1000) {
    updateLeds();
    overflowCount = 0;  // Count sıfırlanır
  }
}

```
