# Timer A Örneği

Bu örnekte interrupt kullanarak switch ile arttırarak3 bit sayıcı çalıştıracağız.

```c
#include <msp430g2553.h>

#define LED1 BIT0
#define LED2 BIT1
#define LED3 BIT2

int count = 0;

void configWDT(void) {
  WDTCTL = WDTPW | WDTHOLD; // watchdog timerı durdur
  __no_operation();
}

void configPins(void) {
  P1DIR |= (BIT0 + BIT1 + BIT2); // LED1, LED2, LED3 çıkış olarak ayarlandı
  P1REN |= BIT5;                 // pull-up resistor buton için aktifleştirildi

  P1IE |= BIT5;                  // interrupta izin verildi
  P1IES |= BIT5;                 // high-low interrupt ayarlandı
  P1IFG &= ~BIT5;                // flag varsa kaldırıldı
}

void updateLeds(void) {
  ++count; // Increment count
  count = count % 8; // mod alındı
  switch (count) {
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
  P1IFG &= ~BIT5; // flag kaldırıldı
}

void main(void) {
  configWDT(); // watchdog timer ayarı
  configPins(); // pin ayarı
  __bis_SR_register(LPM4_bits + GIE); // low power mod aktifleştirildi
}

#pragma vector = PORT1_VECTOR
__interrupt void PORT1_ISR() {
  __delay_cycles(500000); 
  // switch değişimlerinde düzgün sonuç almak için gecikme verildi
  updateLeds();
  // ledler güncellenir
}

```