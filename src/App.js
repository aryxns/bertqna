import React from "react";
const qna = require('@tensorflow-models/qna');

function App() {
  const [paragraph, setParagraph] = React.useState("")
  const [question, setQuestion] = React.useState("")
  const [answer, setAnswer] = React.useState([])
  console.log(answer)
  async function QnA() {
    const model = await qna.load();
    //const question = "Who is Aryan Sharma?"
    //const passage = "Aryan Sharma is the founder of a global technology company, InternX. He is also an active angel investor."
    const answers = await model.findAnswers(question, paragraph);
    console.log('Answers: ');
    const myasnwer = (answers.map(a => (a['text'])));
    setAnswer(myasnwer)
  }
  return (
    <div className="h-screen bg-gray-900">
      <h1 className="m-10 mt-0 text-2xl text-white pt-5">BERT-based QnA</h1>
      <textarea onChange={e => setParagraph(e.target.value)} className="ml-10 mt-5 w-4/5 h-48 p-2 bg-gray-100" placeholder="type paragraph here: "></textarea>
      <input onChange={e => setQuestion(e.target.value)} className="ml-10 mt-5 p-2 bg-gray-100 w-4/5 h-12" placeholder="type question here: "></input>
      <br/>
      <button onClick={QnA} className="bg-gray-600 text-white text-xl p-2 ml-10 mt-10">FIND</button>
      <h1 className="text-xl text-white ml-10 mt-5">Answers: </h1>
      {answer.map(answer => (
        <h1 className="text-white text-lg ml-10 mt-5">{answer}</h1>
      ))}
    </div>
  );
}

export default App;
