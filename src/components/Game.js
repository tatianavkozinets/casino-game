import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Game = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      let localData = JSON.parse(localStorage.getItem(user));
      if (localData) {
        setBalance(Number(localData.profile.balance));
        setData(localData.data);
      } else {
        let userData = {
          profile: { name: user, balance: 99.99 },
          data: []
        };

        let u = JSON.stringify(userData);
        localStorage.setItem(user, u);
        setBalance(99.99);
        setData([]);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      let userData = {
        profile: { name: user, balance: balance },
        data: data
      };
      let u = JSON.stringify(userData);
      localStorage.setItem(user, u);
    }
  }, [balance, data, user]);

  const onUserChange = user => {
    setUser(user);
  };

  const onChangeData = (tempBalance, tabelData) => {
    let temp = data.slice();
    temp.push({
      id: data.length + 1,
      slot1: tabelData[0],
      slot2: tabelData[1],
      slot3: tabelData[2],
      clickTime: new Date()
    });
    setData(temp);
    setBalance(() => balance + tempBalance);
  };

  return (
    <div>
      <Header user={user} onUserChange={onUserChange} balance={balance} />
      <main>
        <Content onChangeData={onChangeData} tableData={data} user={user} />
      </main>
      <Footer />
    </div>
  );
};

export default Game;
