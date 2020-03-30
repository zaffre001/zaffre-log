import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>박희정</h1>
        <div>
            <img src='./avatar.png'></img>
            <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '1.625rem' }}>
                덕업일치를 성공한 게임프로그래머<br />
                email : zaffre001@gmail.com<br />
                <a href='https://github.com/zaffre001/'>깃허브</a>
            </div>
        </div>
        <br />
        <h2>커리어</h2>
        <ul>
            <li>NEXON KOREA 2018.05~</li>
            <li>Netmarble N2 2015.12~2018.03</li>
            <li>Wemade Entertainment 2014.11~2015.09</li>
        </ul>
        <br />
        <h2>프로젝트</h2>
        <ul>
            <li>스톤에이지(라이브)</li>
            <li>파이널샷(런칭 및 라이브)</li>
        </ul>
        <br/>
        <h2>자신있는 것</h2>
        <blockquote>빠르게 적응해서 무언가를 만드는 일</blockquote>
    </Layout>
)
