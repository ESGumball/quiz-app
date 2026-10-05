import React from 'react';
import { useState } from 'react';

const App = () => {
  const [batdau, setBatdau] = useState(true);
  const [cauhoi, setCauhoi] = useState(false);
  const [cauHienTai, setCauHienTai] = useState(null);
  const [diemso, setDiemso] = useState(0);
  const [cauDaDung, setCauDaDung] = useState([]);
  const [ketthuc, setKetthuc] = useState(false);
  const bocauhoi = [
    { id: 1, cauhoi: '1+1=3', dapan: 'Sai' },
    { id: 2, cauhoi: '2+2=4', dapan: 'Đúng' },
    { id: 3, cauhoi: '5+5=10', dapan: 'Đúng' },
    { id: 4, cauhoi: '10+10=30', dapan: 'Sai' },
  ];
  const layCauHoiMoi = () => {
    const cauChuaDung = bocauhoi.filter((cau) => !cauDaDung.includes(cau.id));

    // Nếu không còn câu
    if (cauChuaDung.length === 0) {
      setCauhoi(false);
      setKetthuc(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * cauChuaDung.length);

    const cauMoi = cauChuaDung[randomIndex];

    setCauHienTai(cauMoi);

    setCauDaDung((prev) => [...prev, cauMoi.id]);
  };
  const handleShow = () => {
    setBatdau(false);
    setCauhoi(true);

    layCauHoiMoi();
  };
  const kiemtra = (dapanNguoiChon) => {
    if (dapanNguoiChon === cauHienTai.dapan) {
      setDiemso((prev) => prev + 1);
    }
    layCauHoiMoi();
  };
  return (
    <div class="border-2 p-20">
      {batdau && (
        <div class="text-2xl w-100 text-center" onClick={handleShow}>
          Bắt đầu câu hỏi
        </div>
      )}
      {cauhoi && cauHienTai && (
        <div class="flex flex-col gap-20 w-100">
          <div class="text-center"> Điểm số : {diemso} </div>
          <div class="text-center"> {cauHienTai.cauhoi} </div>
          <div class="flex flex-row justify-between">
            <div class="border p-2" onClick={() => kiemtra('Đúng')}>
              {' '}
              Đúng{' '}
            </div>
            <div class="border p-2" onClick={() => kiemtra('Sai')}>
              {' '}
              Sai{' '}
            </div>
          </div>
        </div>
      )}
      {ketthuc && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Kết thúc!</h1>

          <p className="text-xl">
            Điểm của bạn: {diemso}/{bocauhoi.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
