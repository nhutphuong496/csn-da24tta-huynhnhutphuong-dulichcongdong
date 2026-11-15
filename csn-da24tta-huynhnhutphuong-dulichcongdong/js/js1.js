
const diaDiems = [
    {
        ten: "Ao Bà Om",
        diaChi: "Ao Bà Om, Trà Vinh",
        moTa: "Địa điểm du lịch nổi tiếng với hồ nước trong xanh, hàng cây cổ thụ và không gian thiên nhiên yên bình.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Ao+Ba+Om+Tra+Vinh"
    },
    {
        ten: "Chùa Âng",
        diaChi: "Chùa Âng, Trà Vinh",
        moTa: "Ngôi chùa Khmer cổ kính với kiến trúc độc đáo, mang đậm nét văn hóa truyền thống.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Chua+Ang+Tra+Vinh"
    },
    {
        ten: "Biển Ba Động",
        diaChi: "Biển Ba Động, Trà Vinh",
        moTa: "Điểm đến hấp dẫn với bãi biển rộng, khung cảnh thiên nhiên thoáng đãng và không khí trong lành.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Bien+Ba+Dong+Tra+Vinh"
    },
    {
        ten: "Chùa Vàm Ray",
        diaChi: "Chùa Vàm Ray, Trà Vinh",
        moTa: "Ngôi chùa Khmer nổi bật với kiến trúc lộng lẫy và những hoa văn trang trí tinh xảo.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Chua+Vam+Ray+Tra+Vinh"
    },
    {
        ten: "Đền thờ Bác",
        diaChi: "Long Đức, Trà Vinh",
        moTa: "Nơi lưu giữ tình cảm kính yêu sâu sắc của đồng bào Trà Vinh đối với Chủ tịch Hồ Chí Minh.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Den+tho+Bac+Tra+Vinh"
    },
    {
        ten: "Đại học Trà Vinh",
        diaChi: "126 Nguyễn Thiện Thành, Phường 9, Trà Vinh",
        moTa: "Trường đại học xanh, hiện đại với khuôn viên rộng lớn và kiến trúc tươi mát, năng động.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Dai+hoc+Tra+Vinh"
    },
    {
        ten: "Bảo tàng Dừa sáp",
        diaChi: "Cầu Kè, Trà Vinh",
        moTa: "Nơi trưng bày và giới thiệu đặc sản dừa sáp độc đáo cùng văn hóa chế biến các sản phẩm từ dừa sáp.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Bao+tang+Dua+sap+Tra+Vinh"
    },
    {
        ten: "Khu du lịch Huỳnh Kha",
        diaChi: "Chu Văn An, Phường 4, Trà Vinh",
        moTa: "Khu sinh thái kết hợp giải trí, ẩm thực phong phú với không gian xanh mát thoáng đãng.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Khu+du+lich+Huynh+Kha+Tra+Vinh"
    },
    {
        ten: "Khu du lịch Cồn Chim",
        diaChi: "Hòa Minh, Châu Thành, Trà Vinh",
        moTa: "Điểm du lịch sinh thái thuận thiên nổi tiếng, mang đến trải nghiệm đời sống sông nước miền Tây đích thực.",
        googleMaps: "https://www.google.com/maps/search/?api=1&query=Khu+du+lich+Con+Chim+Tra+Vinh"
    }
];

// Chuẩn hóa chữ để tìm kiếm không dấu
function chuanHoa(chuoi) {
    return chuoi.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .trim();
}

// Hiển thị danh sách địa điểm
function hienThiDiaDiem(danhSach = diaDiems) {
    const danhSachHTML = document.getElementById("danhSachDiaDiem");

    if (!danhSachHTML) return;

    danhSachHTML.innerHTML = "";

    if (danhSach.length === 0) {
        danhSachHTML.innerHTML = `
            <div class="khong-co-ket-qua">
                <h3>Không tìm thấy địa điểm!</h3>
                <p>Vui lòng thử lại với từ khóa khác.</p>
            </div>
        `;
        return;
    }

    danhSach.forEach((item, index) => {
        danhSachHTML.innerHTML += `
            <div class="place-card">
                <div class="place-info">
                    <h3>${item.ten}</h3>

                    <p>📍 ${item.diaChi}</p>

                    <p>${item.moTa}</p>

                    <a href="${item.googleMaps}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="map-btn">
                        📍 Xem Google Maps
                    </a>
                </div>
            </div>
        `;
    });
}

// Tìm kiếm địa điểm
function timKiemDiaDiem() {
    const oTimKiem = document.getElementById("timKiemDiaDiem");

    if (!oTimKiem) return;

    const tuKhoa = chuanHoa(oTimKiem.value);

    const ketQua = diaDiems.filter(item => {
        const thongTin = chuanHoa(
            item.ten + " " +
            item.diaChi + " " +
            item.moTa
        );

        return thongTin.includes(tuKhoa);
    });

    hienThiDiaDiem(ketQua);
}

// Tự động hiển thị khi mở trang
document.addEventListener("DOMContentLoaded", function () {
    hienThiDiaDiem();

    const oTimKiem = document.getElementById("timKiemDiaDiem");

    if (oTimKiem) {
        oTimKiem.addEventListener("input", timKiemDiaDiem);
    }
});
