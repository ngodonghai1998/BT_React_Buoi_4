import React, { Component } from 'react'
import CreateForm from './CreateForm'

export default class ReactForm extends Component {

    state = {
        arrSinhVien: [
            {sinhVienId: '01', sinhVienName: 'Ngô Đông Hải', sinhVienPhone: '0327977111', sinhVienEmail: 'haingodong1998@gmail.com'},
            {sinhVienId: '02', sinhVienName: 'Ngô Việt Anh', sinhVienPhone: '0909737898', sinhVienEmail: 'anhngoviet2003@gmail.com'},
            {sinhVienId: '03', sinhVienName: 'Nguyễn Nhung', sinhVienPhone: '0775511751', sinhVienEmail: 'nhungnguyen@gmail.com'},
        ],
        editSinhVien: {
            sinhVienId: '',
            sinhVienName: '',
            sinhVienPhone: '',
            sinhVienEmail: '',
        },
    }

    addSinhVien = (sinhVienInfo) => {
        console.log(sinhVienInfo);

        this.state.arrSinhVien.push(sinhVienInfo);
        this.setState({
            arrSinhVien: this.state.arrSinhVien,
        })
    }

    delSinhVien = (sinhVienIdXoa) => {
        let sinhVienXoa = this.state.arrSinhVien.findIndex(sinhVien => sinhVien.sinhVienId === sinhVienIdXoa)
        if (sinhVienXoa !== -1) {
            this.state.arrSinhVien.splice(sinhVienXoa, 1);
        }

        // Nhớ setState lại, không là sẽ không render.
        this.setState({
            arrSinhVien: this.state.arrSinhVien,
        })
    }

    updateSinhVien = (newSinhVien) => {
        let sinhVien = this.state.arrSinhVien.find(sinhVien => sinhVien.sinhVienId === newSinhVien.sinhVienId);
        if (sinhVien) {
            for (let key in sinhVien) {
                sinhVien[key] = newSinhVien[key];
            }
        }

        // Nhớ setState lại, không là sẽ không render.
        this.setState({
            arrSinhVien: this.state.arrSinhVien,
        })
    }

    render() {
        return (
            <div className='container'>
                <CreateForm  addSinhVien={this.addSinhVien} editSinhVien={this.state.editSinhVien} updateSinhVien={this.updateSinhVien}/>

                <table className='table mt-2'>
                    {/* thead là table header */}
                    <thead className='bg-dark text-white'>
                        {/* tr là table row */}
                        <tr>
                            {/* th là table header detail */}
                            <th>Mã sinh viên</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arrSinhVien.map((sinhVien) => {
                            return <tr key={sinhVien.sinhVienId}>
                                <td>{sinhVien.sinhVienId}</td>
                                <td>{sinhVien.sinhVienName}</td>
                                <td>{sinhVien.sinhVienPhone}</td>
                                <td>{sinhVien.sinhVienEmail}</td>
                                <td>
                                    <button className='btn btn-primary me-2' onClick={() => {
                                        this.setState({
                                            editSinhVien: sinhVien,
                                        })
                                    }}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => {
                                        this.delSinhVien(sinhVien.sinhVienId);
                                    }}>Del</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
