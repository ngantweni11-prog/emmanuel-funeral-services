export default function Home() {
  return (
    <div>
      <section style={{background: '#111', color: 'white', padding: '40px', textAlign: 'center'}}>
        <img src="/logo.png" alt="Logo" style={{width: '250px'}} />
        <h1>EMMANUEL FUNERAL SERVICES</h1>
        <p><i>With Love and Dignity</i></p>
        <p><b>Call:</b> 081 864 5509 | 078 218 1134</p>
      </section>

      <section style={{padding: '40px'}}>
        <h2>About Us</h2>
        <p>
          Located at 24 Campbell Street, Colesburg. We provide professional,
          compassionate and dignified funeral services.
        </p>
        <p>Email: bomela139@gmail.com | bomelambu@gmail.com</p>
      </section>

      <section style={{padding: '40px', background:'#f4f4f4'}}>
        <h2>R12,500 Funeral Package</h2>
        <p>Starting from R85 per month</p>
        <ul>
          <li>Casket</li>
          <li>Casket wreath</li>
          <li>Hearse and family car</li>
          <li>Tent and 20 chairs</li>
          <li>R1,000 cash payout</li>
          <li>Groceries before the funeral</li>
          <li>Fruit, water and programmes</li>
          <li>Mortuary and fridges</li>
          <li>Church decorations</li>
        </ul>
      </section>

      <section style={{padding: '40px'}}>
        <h2>Burial Society Plans</h2>
        <table border="1" cellPadding="10" style={{borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th>Plan</th><th>Age</th><th>Premium</th><th>Cover</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Single</td><td>18-64</td><td>R85</td><td>R12,500</td></tr>
            <tr><td>Single</td><td>65-74</td><td>R135</td><td>R12,500</td></tr>
            <tr><td>Single + Child</td><td>18-64</td><td>R95</td><td>R12,500</td></tr>
            <tr><td>Single + Child</td><td>65-74</td><td>R145</td><td>R12,500</td></tr>
            <tr><td>Family</td><td>18-64</td><td>R155</td><td>R12,500</td></tr>
            <tr><td>Family</td><td>65-74</td><td>R225</td><td>R12,500</td></tr>
          </tbody>
        </table>
      </section>

      <footer style={{background:'#000', color:'white', textAlign:'center', padding:'20px'}}>
        <p>Reg No: 02 DE AAR 2013</p>
        <p>Emmanuel Funeral Services - Colesburg</p>
      </footer>
    </div>
  );
                      }
