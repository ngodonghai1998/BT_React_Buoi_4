import React, { Component } from 'react'
//Component này sẽ đại diện cho component được load trên url
import { Outlet, NavLink } from 'react-router-dom';

export default class HomeTemplates extends Component {
    render() {
        return (
            <div>
                {/* // Khi làm theo cách này, nhược điểm duy nhất khi gặp phải là thẻ a - thẻ liên kết dẫn đến đường link. Do đó, khi bấm tới ví dụ như Home hay cart thì nó phải load lại trang, không khi đó thì nội dung thay đổi chỉ có trong root, nên chỉ cần load lại trong root là đủ, vậy cần làm gì?
        // Cần dùng một thẻ khác, gọi là thẻ NavLink, NavLinksẽ giúp ta request đến Outlet mà không cần load lại toàn bộ trang. */}
                {/* Chuyển thẻ <a href=''></a> thành <NavLink to=''></NavLink> */}
                <header className='header p-3 bg-dark text-white'>
                    <nav className='d-flex'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Home</NavLink>
                        <NavLink to='/login' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Login</NavLink>
                        <NavLink to='/student-info' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Thông tin sinh viên</NavLink>
                    </nav>
                </header>

                <main style={{ minHeight: '650px' }}>
                    <Outlet></Outlet>
                </main>

                <footer className='bg-dark text-white p-3 text-center'>
                    <h1>Footer</h1>
                </footer>
            </div>
        )
    }
}
