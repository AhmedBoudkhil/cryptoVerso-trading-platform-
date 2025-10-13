import React from 'react';
import './globals.css'; 
import './Hero2.css';   



const Hero2 = () => {
  const cryptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 'DZD 14,631,940.58',
      change: -7.59,
      icon: '₿',
      color: '#F7931A'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 'DZD 498,170.74',
      change: -12.01,
      icon: '◆',
      color: '#627EEA'
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      price: 'DZD 130.30',
      change: 0.05,
      icon: '₮',
      color: '#26A17B'
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 'DZD 320.95',
      change: -12.54,
      icon: 'X',
      color: '#23292F'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: 'DZD 23,855.01',
      change: -17.32,
      icon: 'S',
      color: '#14F195'
    },
    {
      name: 'USDC',
      symbol: 'USDC',
      price: 'DZD 130.18',
      change: 0.00,
      icon: '$',
      color: '#2775CA'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)',
      padding: '60px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      maxWidth: '1400px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '80px',
      alignItems: 'center'
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '700',
      lineHeight: '1.2',
      color: '#1a1a1a',
      margin: '0'
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: '#4a5568',
      lineHeight: '1.6',
      margin: '0'
    },
    button: {
      background: '#0052ff',
      color: 'white',
      border: 'none',
      padding: '16px 32px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      width: 'fit-content',
      transition: 'all 0.3s ease'
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    tabs: {
      display: 'flex',
      gap: '12px'
    },
    tab: {
      padding: '12px 24px',
      border: 'none',
      background: 'white',
      color: '#6b7280',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    tabActive: {
      background: '#1a1a1a',
      color: 'white'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px'
    },
    card: {
      background: 'white',
      padding: '24px',
      borderRadius: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    header: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px'
    },
    icon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: 'white',
      fontWeight: 'bold',
      flexShrink: '0'
    },
    info: {
      flex: '1'
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#1a1a1a',
      margin: '0 0 4px 0'
    },
    price: {
      fontSize: '0.9rem',
      color: '#6b7280',
      margin: '0'
    },
    change: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '1.5rem',
      fontWeight: '700'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Left Section */}
        <div style={styles.left}>
          <h1 style={styles.title}>
            Explore crypto like Bitcoin, Ethereum, and Dogecoin
          </h1>
          <p style={styles.subtitle}>
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>
          <button 
            style={styles.button}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#0041cc';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 82, 255, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#0052ff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            See more assets
          </button>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          {/* Tabs */}
          <div style={styles.tabs}>
            <button style={{...styles.tab, ...styles.tabActive}}>
              Tradable
            </button>
            <button style={styles.tab}>
              Top gainers
            </button>
          </div>

          {/* Crypto Grid */}
          <div style={styles.grid}>
            {cryptoData.map((crypto, index) => (
              <div 
                key={index} 
                style={styles.card}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={styles.header}>
                  <div style={{...styles.icon, backgroundColor: crypto.color}}>
                    {crypto.icon}
                  </div>
                  <div style={styles.info}>
                    <h3 style={styles.name}>{crypto.name}</h3>
                    <p style={styles.price}>{crypto.price}</p>
                  </div>
                </div>
                <div style={{
                  ...styles.change,
                  color: crypto.change >= 0 ? '#10b981' : '#ef4444'
                }}>
                  <span style={{fontSize: '1.2rem'}}>
                    {crypto.change >= 0 ? '↑' : '↓'}
                  </span>
                  <span>
                    {Math.abs(crypto.change).toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;