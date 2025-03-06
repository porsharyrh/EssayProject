import {useState} from 'react';

function EssayProject() {
  const [essayTopic, setEssayTopic] = useState('');
  const [essayContent, setEssayContent] = useState('');
  const [essayWordCount, setEssayWordCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!essayTopic || !essayContent) {
      return;
    }
    // Make an API call to save the essay
    console.log('Essay saved!', { essayTopic, essayContent });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'essayTopic') {
      setEssayTopic(value);
    } else if (name === 'essayContent') {
      setEssayContent(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay Topic:
        <input type="text" name="essayTopic" value={essayTopic} onChange={handleChange} />
      </label>
      <br />
      <label>
        Essay Content:
        <textarea name="essayContent" value={essayContent} onChange={handleChange}></textarea>
      </label>
      <br />
      <button type="submit">Save Essay</button>
    </form>
  );
}

export default EssayProject;