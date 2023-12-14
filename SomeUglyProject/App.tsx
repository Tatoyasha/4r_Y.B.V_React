
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';


import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';

import FontAwesome from 'react-native-vector-icons/FontAwesome';



const user = {
  _id: 1,
  name: 'User',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
};


const bot = {
  _id: 2,
  name: 'Bot',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png',
};


const echo = (message) => {
  return {
    _id: Math.random(),
    text: message.text,
    createdAt: new Date(),
    user: bot,
  };
};


const ChatScreen = () => {

  const [messages, setMessages] = useState([]);


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Привіт я бот і буду дублювати ваші повідомлення',
        createdAt: new Date(),
        user: bot,
      },
    ]);
  }, []);


  const handleSend = (newMessage) => {
    setMessages(GiftedChat.append(messages, newMessage));

    setTimeout(() => {
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, echo(newMessage[0]))
      );
    }, 1000);
  };


  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <FontAwesome name="paper-plane" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  };


  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      user={user}
      onSend={(newMessage) => handleSend(newMessage)}
      renderBubble={renderBubble}
      placeholder="Ваше повідомлення тут..."
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
    />
  );
};


const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default ChatScreen;
