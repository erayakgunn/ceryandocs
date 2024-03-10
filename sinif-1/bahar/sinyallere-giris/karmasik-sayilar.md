# Karmaşık Sayılar

Karmaşık sayılar sinyalleri matematiksel olarak açıklamamızda yardımcı olur.

Karmaşık sayılar basitçe aşağıdaki gibi yazılabilir.

$z=x+jy$ | x(reel kısım) , y(imajiner kısım), $j=\sqrt{-1}$ ya da $j^2 = -1$

---
Karmaşık Sayılar elektrik mühendisliğinde sinozoidal sinyalleri gösterirken kullanıldıklarında sinyallerle yapılan işlemleri kolaylaştırırlar

$z=(x,y) \rightarrow$ sıralı çift

$=x+jy$

$=Re\{z\} + j*Im\{z\}$,  $x=Re\{z\}, y=Im\{z\}$


## Kartezyen Gösterim
Sıralı çiftler iki boyutlu düzlemde noktalar halinde gösterilebilir.

![alt text](/image.png)

## Polar Gösterim

Aşağıda görülebileceği gibi karmaşık sayılar uzunluk ve açıyla da gösterilebilir.

![alt text](/image-1.png)

$z \leftrightarrow  r.\angle{\theta} \implies |z|=r$

::: warning Uyarı
$\theta$ yalnızca $-180^\circ$ ve $180^\circ$ arasındaki değerleri alabilir.
:::

## Kartezyen ve Polar Gösterim Dönüşümü

Her iki gösterim de karmaşık sayıları göstermek için sıklıkla kullanılır. Sinozoidal sinyalleri göterirken polar gösterim özellikle kullanışlıdır. Fakat çoğunlukla farklı yerlerde kartezyen gösterim tercih edilir. Nitekim bu iki gösterimi birbirine dönüştürmeyi bilmeliyiz.

$x= r.cos(\theta)$,
$y= r.sin(\theta)$ $\implies z=r.cos(\theta) + jr.sin(\theta)$

## Euler Formülü

$e^{j\theta} = cos(\theta) + jsin(\theta)$

$e^{j\theta}$ $1\angle{\theta}$'ya eşdeğer karmaşık üstel olarak adlandırılır.

## Derece ve Radyan Dönüşümü

$$\theta \times {180 \over 2\pi}  = derece $$

## Ters Euler Formülü

$$cos(\theta) = { {e^{j\theta} + e^{-j\theta}} \over 2}$$
$$sin(\theta) = { {e^{j\theta} - e^{-j\theta}} \over 2j}$$

## Karmaşık Sayılarda Kurallar

Toplama: $z_1+z_2 = (x_1+jy_1)+(x_2+jy_2) = (x_1+x_2) + j(y_1+y_2)$