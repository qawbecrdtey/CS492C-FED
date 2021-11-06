/* eslint-disable no-unused-vars */
import * as React from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import "./markdownStyles.css";
import "react-mde/lib/styles/css/react-mde-all.css";

function loadSuggestions(text) {
  return new Promise((accept, reject) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: "Andre",
          value: "@andre"
        },
        {
          preview: "Angela",
          value: "@angela"
        },
        {
          preview: "David",
          value: "@david"
        },
        {
          preview: "Louise",
          value: "@louise"
        }
      ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    }, 250);
  });
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");

  const save = async function* (data) {
    // Promise that waits for "time" milliseconds
    const wait = function (time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield "https://picsum.photos/300";
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  return (
    <div className="container">
      <h1>
        게시글 작성 페이지
      </h1>
      <div>
        <div>
          제목
          <input type="text" id="title"></input>
        </div>
        <div>
          글 작성자
          <input type="name" id="name"></input>
        </div>
        
      </div>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
        paste={{
          saveImage: save
        }}
      />
      <button>
        등록하기
      </button>
      <button>
        목록으로
      </button>
    </div>
  );
}
