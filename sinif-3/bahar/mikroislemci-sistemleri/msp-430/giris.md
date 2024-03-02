# MSP-430

[[toc]]

## Pin Yapısı
![alt text](image.png)

## Pinler ve Konfigürasyonları

### PxIN

Port okuma registerıdır. Yalnızca okunabilir. Örnek kullanım aşağıdaki gibidir.

```c
P1REN = 0x08;


```

### PxDIR

Portların giriş veya çıkış olarak olarak kullanabilmesini sağlar.

Örnek:

```c{2,10}

P1IN = 0x40; 
// P1.6 portunu çıkış, geri kalan portları giriş olarak ayarlar
// 0100 0000
//  ^ sağdan 6.bit

// aynı anda birden fazla portu giriş olarak
// kullanabilmek için aşağıdaki gibi ayarlanabilir

P1IN = 0x41; 
// P1.6 ve P1.0 portunu çıkış, geri kalan portları giriş olarak ayarlar 
// 0100 0001
//  ^      ^ sağdan 6. ve 0. bit

```

