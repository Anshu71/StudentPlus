
import React, { useState, useEffect } from 'react';
import bot from '../../assets/bot.svg';
import user from '../../assets/user.svg';
import send from '../../assets/send.svg';
import './style.css'

function ChatBot() {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const chatContainer = document.getElementById('chat_container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatMessages]);

  const loader = (element) => {
    element.textContent = '';

    const loadInterval = setInterval(() => {
      element.textContent += '.';

      if (element.textContent === '....') {
        element.textContent = '';
      }
    }, 300);

    return loadInterval;
  };

  const typeText = (element, text) => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { isAi: false, value: data.get('prompt'), uniqueId: generateUniqueId() },
    ]);
    setInputValue('');

    const uniqueId = generateUniqueId();
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { isAi: true, value: ' ', uniqueId },
    ]);

    const messageDiv = document.getElementById(uniqueId);
    const loadInterval = loader(messageDiv);

    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: data.get('prompt'),
        }),
      });

      clearInterval(loadInterval);
      messageDiv.innerHTML = '';

      if (response.ok) {
        const responseData = await response.json();
        const parsedData = responseData.bot.trim();
        typeText(messageDiv, parsedData);
      } else {
        const errorMessage = await response.text();
        messageDiv.innerHTML = 'Something went wrong';
        alert(errorMessage);
      }
    } catch (error) {
      clearInterval(loadInterval);
      messageDiv.innerHTML = 'Something went wrong';
      alert(error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const chatStripe = (isAi, value, uniqueId) => {
    return (
      <div className={`wrapper ${isAi ? 'ai' : ''}`} key={uniqueId}>
        <div className="chat">
          <div className="profile">
            <img src={isAi ? bot : user} alt={isAi ? 'bot' : 'user'} />
          </div>
          <div className="message" id={uniqueId}>
            {value}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="app">
      <div id="chat_container">
        {chatMessages.map((message) =>
          chatStripe(message.isAi, message.value, message.uniqueId)
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="prompt"
          rows="1"
          cols="1"
          placeholder="Ask Chatbot"
          value={inputValue}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        <button type="submit">
          <img src={send} alt="Send" />
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
