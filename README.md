

Bir To-Do(Yapılacaklar) listesi uygulaması. Uygulamanın bir front-end ve back-end kısmı olmalıdır. Ayrıca uygulama, veritabanı kullanmalı ve REST API üzerinden CRUD işlemleri yapabilmelidir.(Mock Api kullanabilirsiniz.) 
      Mock Apide task,id ve isdone oluşturarak onları crud işlemlerini uyguladım
Özellikler; 
- Front-end: Next.js kullanarak bir front end oluşturun. 
- Back-end:Next.js’in API Routes özelliği ile back-end oluşturun. 
Gereksinimler; 
1)- API istekleri yaparken Promiseleri kullanın. 
Api isteği yaparken  sadece promise kullandım ve olumlu resolve olumsuz reject durumuna göre ayarlama yaptım

2)- Bir component içinde this kullanarak state yönetimi yapın.(Sınıf Componenti kullanarak) 
Componentlerin çoğunda class component yapısını kullanmaya çalıştım

3)- Asenkron işlemler yaparken, setTimeout veya setInterval gibi asenkron fonksiyonlar kullanın. 
home sayfasında her 30 saniyede bir verileri almak için setInterval kullandım
4)- Statik Sayfa Oluşturma: getStaticProps kullanarak önceden oluşturulmuş bir ana sayfa yapın. -
get staticprops sadece funtional componentlerle çalıştığı için page sayfasında verileri ilk serverda 
verileri aldım ve home componentine props geçtim.
5) Dinamik Yollar: getStaticPaths kullanarak dinamik yollar oluşturun. Örneğin,her bir “to-do” için ayrı bir sayfa -
6) Sunucu tarafı işlemler: getServerSideProps kullanarak, kullanıcı girişi yapıldığında sunucu tarafında oturum kontrolü yapın. 
7)- Görüntü Optimizasyonu: Next.js Image bileşeni ile yapılacaklar listesine ait görselleri optimize edin. - 
Image eklendi todoliste
8)Veri Yenileme: revalidate parametresi ile belirli aralıklarla verinin güncellendiği bir sayfa oluşturun. 
revalidatei home sayfasına ekleyerek 30 saniyede bir güncellemesini sağladım
9)- Özel bir event loop mekanizması tasarlayın. Örneğin, belirli bi süre sonra otomatik olarak to-do’ları güncelleyen bir mekanizma. 
home sayfasında her 30 saniyede bir verileri almak için setInterval kullandım
10)- Birden fazla API route oluşturarak, getInitialProps ve getServerSideProps’u bir arada kullanmayı deneyin. 
