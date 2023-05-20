import React, { Component } from 'react'

export default class CreateForm extends Component {

    state = {
        values: {
            sinhVienId: '',
            sinhVienName: '',
            sinhVienPhone: '',
            sinhVienEmail: '',
        },
        errors: {
            sinhVienId: '(*)',
            sinhVienName: '(*)',
            sinhVienPhone: '(*)',
            sinhVienEmail: '(*)',
        },
    }

    validSinhVienSubmit = (valid) => {
        // Ngăn không cho button loại submit chạy mặc định.
        valid.preventDefault();

        // Kiểm tra dữ liệu.
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                alert('Dữ liệu không hợp lệ');
                return;
            }
        }

        // Thêm sinh viên vô table.
        let {addSinhVien} = this.props;
        addSinhVien(this.state.values);

    }

    validSinhVienChange = (valid) => {
        // Thẻ target xử lý sự kiện cho onInput ở dưới.
        let {value, id} = valid.target;
        let dataType = valid.target.getAttribute('data-type');

        // Xử lý this.state.values.
        let newValue = {...this.state.values};
        newValue[id] = value;

        // Xử lý this.state.errors.
        let newError = {...this.state.errors};
        let messError = '';
        if (value.trim() === '') {
            messError = id + 'Không được bỏ trống!'
        } else {
            if (dataType) {
                switch(dataType) {
                    case 'number': {
                        let regexNumber = /^\d+$/;
                        if (!regexNumber.test(value)) {
                            messError = id + ' phải là số !';
                        };
                        break;
                    }
                    case 'string': {
                        let regexNumber = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
                        // let regexNumber = /^[a-z A-Z0-9]+$/;
                        if (!regexNumber.test(value)) {
                            messError = id + ' phải là ký tự !';
                        };
                        break;
                    }
                    default:
                        break;
                }
            }
        }
        newError[id] = messError;

        // Cập nhật lại state sau khi xử lý.
        this.setState({
            values: newValue,
            errors: newError,
        }, () => {
            console.log(this.state);
        })
    }

    //Chỉ chạy khi props thay đổi và trước khi render (thường dùng cho việc gán props và state)
    componentWillReceiveProps(newProps) {
        this.setState({
            values: newProps.editSinhVien,
        })
    }

    render() {

        let {sinhVienId, sinhVienName, sinhVienPhone, sinhVienEmail} = this.state.values;

        return (
            <form className='card' onSubmit={this.validSinhVienSubmit}>
                <div className='card-header bg-dark text-white'>Product Info</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Mã SV</p>
                                <input data-type='number' className='form-control' id='sinhVienId' name='sinhVienId'  onInput={this.validSinhVienChange} value={sinhVienId}/>
                                <p className='text text-danger' >{this.state.errors.sinhVienId}</p>
                            </div>

                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input className='form-control' id='sinhVienPhone' name='sinhVienPhone' value={sinhVienPhone} onInput={this.validSinhVienChange}/>
                                <p className='text text-danger' >{this.state.errors.sinhVienPhone}</p>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input data-type='string' className='form-control' id='sinhVienName' name='sinhVienName' value={sinhVienName} onInput={this.validSinhVienChange}/>
                                <p className='text text-danger' >{this.state.errors.sinhVienName}</p>
                            </div>

                            <div className='form-group'>
                                <p>Email</p>
                                <input data-minlength='6' data-maxlength='32' datatype='' className='form-control' id='sinhVienEmail' name='sinhVienEmail' value={sinhVienEmail} onInput={this.validSinhVienChange}/>
                                <p className='text text-danger' >{this.state.errors.sinhVienEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success mx-3' type='submit'>Thêm sinh viên</button>
                    <button className='btn btn-success' type='button' onClick={() => {
                        //Lấy hàm update state từ component cha truyền vào con
                        let {updateSinhVien} = this.props;
                        //Gửi ra dữ liệu sau khi thay đổi product
                        updateSinhVien({...this.state.values});
                    }}>Cập nhật sinh viên</button>
                </div>
            </form>
        )
    }
}
