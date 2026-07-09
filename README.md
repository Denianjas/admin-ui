
## Struktur Arsitektur UI (Antarmuka Pengguna)

Untuk membangun antarmuka di aplikasi Finebank, kami mengadopsi metodologi **Atomic Design**. Pendekatan ini dipilih agar kode UI menjadi lebih rapi, modular, mudah diskalakan, dan komponennya bisa digunakan berulang kali (*reusable*). Berdasarkan metode tersebut, struktur UI kami bagi menjadi empat tingkatan utama:

### 1. Elements

Ini adalah komponen dasar atau unit terkecil yang tidak bisa dipecah lagi. Elemen-elemen ini bertindak sebagai pondasi utama pembentuk antarmuka.

* **`Button`**: Tombol interaktif yang memiliki berbagai macam bentuk atau *state*.


* **`Input`**: Kolom bagi pengguna untuk mengetikkan atau memasukkan data teks.


* **`Label`**: Teks keterangan deskriptif yang biasanya menempel pada elemen input.


* **`LabeledInput`**: Komponen gabungan yang menyatukan `Label` dan `Input` ke dalam satu kesatuan.


* **`CheckBox`**: Kotak centang untuk pilihan biner (ya/tidak) atau untuk menyetujui sesuatu.


* **`Logo`**: Gambar atau ikon yang menjadi representasi identitas merek Finebank.IO.


* **`Icon`**: Elemen grafis vektor (seperti ikon *Overview*, *Transaction*, *Settings*) pendukung navigasi atau aksi.


* **`Card`**: Wadah dasar untuk menampung konten tertentu, yang juga sudah mendukung fitur *Dark Mode*.


* **`AppSnackbar`**: Pesan *pop-up* sementara untuk memberikan notifikasi atau respons sistem kepada pengguna.



### 2. Fragments

Tingkatan ini setara dengan konsep *Molecules* dan *Organisms* dalam Atomic Design. Bagian ini merupakan gabungan dari beberapa *Elements* yang membentuk sebuah fungsi UI mandiri dan spesifik.

* **`FormSignIn`**: Kumpulan elemen (seperti input dan tombol) yang membentuk form untuk proses login.


* **`FormSignUp`**: Kumpulan elemen yang dikhususkan untuk form pendaftaran akun pengguna baru.


* **`CardBalance`**: Tampilan visual yang menunjukkan jumlah saldo milik pengguna.


* **`CardExpense`**: Tampilan ringkas mengenai metrik atau indikator pengeluaran.


* **`CardExpenseBreakdown`**: Tampilan analitik untuk menjabarkan detail pengeluaran berdasarkan kategorinya.


* **`CardGoal`**: Tampilan untuk memantau sejauh mana kemajuan target keuangan pengguna.


* **`CardRecentTransaction`**: Komponen yang berisi daftar riwayat transaksi secara berurutan.


* **`CardStatistic`**: Tampilan grafik untuk membandingkan statistik transaksi mingguan.


* **`CardUpcomingBill`**: Tampilan daftar tagihan mendatang yang harus dibayar.



### 3. Layouts

Berperan sebagai kerangka tata letak atau *Templates* yang mengatur penempatan komponen-komponen *Fragments*. Tingkat ini juga mengatur fungsionalitas yang berlaku secara global di aplikasi.

* **`AuthLayout`**: Kerangka tata letak yang posisinya terpusat, khusus untuk halaman autentikasi (login dan register). Layout ini juga sudah mendukung manajemen mode terang dan gelap (*Dark Mode*).


* **`MainLayout`**: Kerangka tata letak utama setelah pengguna berhasil login. Komponen ini mengatur letak matriks dasbor, menu navigasi samping (*Sidebar*), *Header* profil pengguna, serta mendistribusikan pengaturan tema dinamis dan *Dark Mode* ke seluruh komponen di dalamnya.



### 4. Pages

Tingkatan paling atas dan spesifik dalam hierarki. Ini berupa *Layouts* yang sudah disuntikkan dengan data konkret dan siap ditampilkan pada rute URL tertentu di aplikasi.

* **`SignIn`**: Halaman rute awal khusus bagi pengguna lama yang ingin masuk atau login.


* **`SignUp`**: Halaman rute khusus untuk proses pendaftaran pengguna baru.


* **`Dashboard` / `Overview**`: Halaman utama (setelah login) yang menyajikan seluruh kumpulan data metrik keuangan pengguna secara lengkap.