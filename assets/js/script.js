document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Mengambil nilai input
    var name = document.getElementById('product-name').value;
    var price = document.getElementById('product-price').value;
    var description = document.getElementById('product-description').value;

    // Membuat elemen produk baru
    var productList = document.getElementById('product-list');
    var newProduct = document.createElement('li');
    newProduct.className = 'list-group-item';
    newProduct.innerHTML = `<strong>${name}</strong> - Rp${price}<br>${description}`;

    // Menambahkan produk baru ke daftar
    productList.appendChild(newProduct);

    // Menghapus nilai input setelah menambahkan produk
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-description').value = '';
});

