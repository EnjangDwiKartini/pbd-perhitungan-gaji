# APLIKASI SEDERHANA PERHITUNGAN GAJI KARYAWAN 

* Pokok Masalah 
    Membangun sistem untuk mengelola proses penggajian Karyawan
* Batasan Masalah 
    Aplikasi ini dibuat untuk mempermudah Perhitungan Gaji Karyawan berdasarkan Gaji Pokok.
    Gaji Pokok ditentukan Berdasarkan Jabatan yang diduduki oleh Karyawan sesuai dengan Kesepakatan Perusahaan yaitu Sebagai Berikut :
    -   Direktur        = Rp 20.000.000
    -   Manager         = Rp 15.000.000
    -   Accounting      = Rp 12.500.000
    -   Marketing       = Rp 8.000.000
    -   Staff Produksi  = Rp 5.000.000
    -   Personalia      = Rp 9.500.000
    Untuk menghitung Total gaji karyawan menggunakan aplikasi ini harus mengisikan besar Gaji Pokok secara manual. Gaji total diperoleh dari jumlah Gaji Pokok ditambah dengan Tunjangan sebesar 20% dan dikurangi pajak sebesar 5%. 
    
    Selain untuk menghitung, aplikasi ini juga dapat menyimpan data yang sudah dihitung tersebut ke dalam Database dan menampilkan dalam bentuk tabel.
* Pembuat " Enjang Dwi Kartini " (NIM: 163210011)
* Development tools 
    ~~~
    Dibuat dengan NodeJS
    Sistem Operasi : Windows 10
    Bahasa Pemrograman : JavaScript
    Database Server : MongoDB
    Text Editor : Visual Studio Code 
    Web Browser : Chrome 
    ~~~
* instalasi development tools 
    NodeJS, Visual Studio Code , MongoDB
* Lisensi 
    NodeJS  : https://nodejs.org/en/download/
    Visual Studio Code  : https://code.visualstudio.com/Download
# Change Logs 
## Senin, 7 Mei 2018
   - Pada Pertemuan ini saya mencoba untuk menginstall data - data yang diperlukan untuk membuat aplikasi dengan node js dan mongoDB
# Change Logs 
## Senin, 14 Mei 2018
    - Pada pertemuan ini saya membuat database dbgaji dan form input data :
    <body>
    
    ~~~~
    <form>
    <td>Nama Karyawan : <input type="text" id="nm"></td><br><br>
    <td>Alamat :  <input type="text" id="alamat"></td><br><br>
    <td>Jabatan : <select size="1" id="jabatan">
                            <option>Direktur</option>
                            <option>Manager</option>
                            <option>Accounting</option>
                            <option>Marketing</option>
                            <option>Staff Produksi</option>
                            <option>Personalia</option> </select>
    </td><br><br>
     <td>Gaji Pokok  : <input type="text" id="gp"></td> <br><br>
     <td>Tunjangan :<input type="text" id="tunj"></td><br><br>
     <td>Pajak (5%) : <input type="text" id="pjk"></td><br><br>
     <td>Gaji Total  : <input type="text" id="gt"></td><br><br>
      <input type="button" value="Hitung" onclick="hitung()">
      <input type="reset" value="Reset" >
      <input type="submit" value="Simpan" onclick="simpan()">
    </form>
    ~~~~
# Change Logs 
## Senin, 21 Mei 2018
    - Pada Pertemuan ini saya membuat project baru yang saya gunakan untuk mempelajari web CRUD dengan nodeJS dan mongoDB
# Change Logs 
## Senin, 28 Mei 2018
    - Melanjutkan membuat perintah input data dari project yang sebelumnya
# Change Logs 
## Senin, 4 Juni 2018
    - Melanjutkan membuat perintah hapus data dari project yang sebelumnya
# Change  Logs
## Senin, 25 Juni 2016
<<<<<<< HEAD
- menjalankan  web CRUD NodeJS MongoDB https://github.com/EnjangDwiKartini/NodeJS-MongoDB-Belajar
