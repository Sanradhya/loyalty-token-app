import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import contractABI from './utils/contractABI.json';
import Header from './components/header';
import Dashboard from './components/dashboard';

const App = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);

    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const loyaltyContract = new web3.eth.Contract(contractABI, contractAddress);
    const userBalance = await loyaltyContract.methods.balanceOf(accounts[0]).call();
    setBalance(userBalance);
  };

  return (
    <div>
      <Header account={account} />
      <Dashboard balance={balance} />
    </div>
  );
};

export default App;
