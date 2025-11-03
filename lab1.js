// bai 1 : viet ham chi so BMI va phan loai
function tinhBMI(canNang, chieuCao) {
    let bmi = canNang / (chieuCao * chieuCao);
    let ketluan = '';

    if (bmi < 18.5) {
        ketluan = 'Thiếu cân';
    } else if (bmi < 24.9) {
        ketluan = 'Cân nặng bình thường';
    } else if (bmi < 29.9) {
        ketluan = 'Thừa cân';
    } else {
        ketluan = 'Béo phì';
    }
    return { bmi, ketluan };
}
console.log(tinhBMI(92,1.75));


// bai 2 : Tao doi tuong quan ly sach su dung Enhance Object Literals
function createBook(tieuDe, tacGia, namXuatBan, gia) {
    const sach = {
        tieuDe,
        tacGia,
        namXuatBan,
        gia,
        layThongTinSach() {
            return `Tiêu đề: ${this.tieuDe}, Tác giả: ${this.tacGia}, Năm: ${this.namXuatBan}, Giá: $${this.gia}`;
        },
        ['tinhGiamGia'](phanTramGiam) {
            const giamGia = this.gia * (phanTramGiam / 100);
            return this.gia - giamGia;
        }
    };
    return sach;
}
    const myBook = createBook("Hướng dẫn JavaScript", "Nguyễn Văn A", 2025, 29.99);
    console.log(myBook.layThongTinSach());
    console.log(`Giá sau khi giảm (giảm 20%): $${myBook.tinhGiamGia(20)}`);
