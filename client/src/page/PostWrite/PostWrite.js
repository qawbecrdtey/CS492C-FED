import React from 'react';
import Header from '../../component/Header';
import * as Showdown from "showdown";
import { GroundContainer, HeaderContainer } from '../PostMain/styled';
import { EditorContainer, BottomContainer } from './styled';
import ReactMde from 'react-mde';
import { useState } from 'react';
import { useHistory } from 'react-router';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const PostWrite = () => {
    const [article, setArticle] = useState("");
    const [selectedTab, setSelectedTab] = useState("write");
    const history = useHistory();
    const saveArticle = () => {
        console.log(article);
    }
    const toPostList = () => {
        history.push('/postMain');
    }
    return (
        <GroundContainer >
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <EditorContainer>
                <ReactMde 
                    value={article}
                    onChange={setArticle}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </EditorContainer>
            <BottomContainer>
                <button onClick={saveArticle}>등록</button>
                <button onClick={toPostList}>목록으로</button>
            </BottomContainer>
        </GroundContainer>

    )

}

export default PostWrite;