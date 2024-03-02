# C Operatörleri

## Aritmetik Operatörler

### Toplama

```c
int sonuc = a + b;
```

### Çıkarma

```c
int sonuc = a - b;
```

### Çarpma

```c
int sonuc = a * b;
```

### Bölme

```c
int sonuc = a / b;
```

### Mod Alma

```c
int sonuc = a % b;
// a = bölünen, b = bölen, sonuc = kalan 
```

### Arttırma

```c{3}
int deger = 5;
printf("%d\n", ++deger);
// değer anında 6 olur ve sonuç olarak 6 gösterilir.

int deger2 = 1;
printf("%d\n", deger++);
// ilk önce sonuç olarak 1 gösterilir, daha sonrasında 2 değerini alır.
```

### Azaltma

```c{3}
int deger = 5;
printf("%d\n", --deger);
// değer anında 4 olur ve sonuç olarak 4 gösterilir.

int deger2 = 1;
printf("%d\n", deger--);
// ilk önce sonuç olarak 1 gösterilir, daha sonrasında 0 değerini alır.
```

## Karşılaştırma Operatörleri

### Eşitlik

```c
int x = 5;
int y = 5;
printf("%d", x == y);
// 1 döndürülür.
```

### Eşit Değil

```c
int x = 5;
int y = 4;
printf("%d", x != y);
// 1 döndürülür.
```

### Büyüktür

```c
int x = 5;
int y = 4;
printf("%d", x > y);
// 1 döndürülür.
```
### Küçüktür

```c
int x = 5;
int y = 4;
printf("%d", y < x);
// 1 döndürülür.
```

### Büyük eşittir

```c
int x = 5;
int y = 4;
printf("%d", x >= y);
// 1 döndürülür.
```
### Küçük eşittir

```c
int x = 5;
int y = 4;
printf("%d", y <= x);
// 1 döndürülür.
```

## Mantık Operatörleri

### Ve

İfadelerin hepsi doğruysa 1 döndürür.

```c
int x = 5;
int y = 4;
printf("%d", x < 6 && y < 10);
// 1 döndürülür.
```
### Veya

İfadelerden herhangi biri doğru ise 1 döndürür.

```c
int x = 5;
int y = 4;
printf("%d", x < 3 || y < 10);
// 1 döndürülür.
```

### Değil

Sonucu tersine çevirir.

```c
int x = 5;
printf("%d", !(x < 3));
// 1 döndürülür.
```

## Bit Operatörleri

### Değil

Tüm bitleri tersine çevirir.
```c
unsigned char a = 5;
// a = 0000 0101

printf("~a = %d\n", a = ~a);
// Sonuç 1111 1010
```

### Ve

Sayıların tüm bitlerinde tek tek mantıksal ve işlemini yapar ve sonucu geri döndürür.
```c
unsigned char a = 5, b = 9;;
// a = 0000 0101, b = 00001001

printf("a & b = %d\n", a & b);
// Sonuç 0000 0001
```

### Veya

Sayıların tüm bitlerinde tek tek mantıksal veya işlemini yapar ve sonucu geri döndürür.
```c
unsigned char a = 5, b = 9;
// a = 0000 0101, b = 00001001

printf("a | b = %d\n", a & b);
// a | b = 0000 1101
```

### Özel Veya

Sayıların tüm bitlerinde tek tek iki bitten yalnızca biri 1 olduğunda sonucu 1 olarak geri döndürür.
```c
unsigned char a = 5, b = 9;
// a = 0000 0101, b = 00001001

printf("a ^ b = %d\n", a & b);
// a ^ b = 0000 1101
```

### Sola Kaydırma

Sayının tüm bitlerini sola kaydırır.
```c
unsigned char a = 5;
// a = 0000 0101, 

printf("b << 1 = %d\n", b << 1);
// Sonuç 0000 1010
```

### Sağa Kaydırma

Sayının tüm bitlerini sağa kaydırır.
```c
unsigned char a = 5;
// a = 0000 0101, 

printf("a << 1 = %d\n", a << 1);
// Sonuç 0000 0010
```

## Atama Operatörleri

### Doğrudan Atama

```c
a = b;
```

### Toplamalı Atama

```c
a += b;
// a = a + b;
```

### Çıkarmalı Atama

```c
a -= b;
// a = a - b;
```

### Çarpmalı Atama

```c
a *= b;
// a = a * b;
```

### Bölmeli Atama

```c
a /= b;
// a = a / b;
```

### Modlu Atama

```c
a %= b;
// a = a % b;
```

### Ve"li" Atama

```c
a &= b;
// a = a & b;
```

### Veya"lı" Atama

```c
a |= b;
// a = a | b;
```

### Özel Veya"lı" Atama

```c
a ^= b;
// a = a ^ b;
```

### Sola Bit Kaydırmalı Atama

```c
a <<= b;
// a = a << b;
```

### Sağa Bit Kaydırmalı Atama

```c
a >>= b;
// a = a >> b;
```