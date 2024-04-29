import React from 'react';

function Languages() {
    return (
        <div className='mainbox'>
            <section>
                <h2>Computing Languages I Learned</h2>
                <div class="lang">
                    <p class="title">파이썬</p>
                    <p class ="ability">1학년 전공 / 간단한 프로그램 제작 가능</p>
                    <p class="grade">→ A0</p>
                </div>

                <div class="lang">
                    <p class="title">C언어</p>
                    <p class ="ability">학문기초교양 / 코드 보고 기능 유추 가능</p>
                    <p class="grade">→ A0</p>
                </div>

                <div class="lang">
                    <p class="title">HTML, CSS</p>
                    <p class ="ability">독학 / 복잡하지 않은 웹페이지 제작 가능</p>
                    <p class="grade"></p>
                </div>
            </section>
        </div>
    );
}

export default Languages;