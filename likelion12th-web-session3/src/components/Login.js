import { useState } from "react";
import "./Login.css";

const Login = ({onLoginSuccess}) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();     // 폼 기본 동작 방지

        localStorage.setItem('id', 'cogmlfla');
        localStorage.setItem('password', 'gmdlfla');
        
        const storedId = localStorage.getItem('id');
        const storedPassword = localStorage.getItem('password');

        // 입력된 id, password와 UserInfo의 값 비교
        if (id === storedId && password === storedPassword) {
            onLoginSuccess(true);     // 로그인 성공 시 상태 변경
        }
        else {
            alert("ID 혹은 Password가 틀렸습니다. 다시 시도하세요.");
            setId("");
            setPassword("");
        }
    };

    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
            <form className="login_form" onSubmit={handleLogin}>
                <input
                    type="text"
                    className="login_input"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    />
                <input
                    placeholder="Password"
                    type="Password"
                    className="login_input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login_btn">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;