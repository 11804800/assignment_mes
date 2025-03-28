import './App.css'
import WindowIcon from '@mui/icons-material/Window';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { useRef, useState } from 'react';

function App() {

  const [sidebarActive, setSideBarActive] = useState(false);
  return (
    <div className='flex-container'>
      <div className='sidebar-container' style={{display:`${sidebarActive ? "flex":"none"}`}}>
        <div className='flex-row-2'>
          <h1 className='logo-title'>Logo</h1>
          <button className='close-btn' onClick={() => setSideBarActive(false)}>
            <CloseOutlinedIcon />
          </button>
        </div>
        <div className='sidebar'>
          <button className='sidebar-link-btn' style={{ background: "rgb(98, 89, 232)" }} >
            <WindowIcon />
            Dashboard
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/Analytics.png' alt='analytics' width="20" height="20" />Analytics
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/wallet.png' alt='my-wallet' width="20" height="20" />My Wallet
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/user.png' alt='accounts' width="20" height="20" />Accounts
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/setting.png' alt='setting' width="20" height="20" />Settings
          </button>
        </div>
      </div>
      <div className='sidebar-container' >
          <h1 className='logo-title'>Logo</h1>
        <div className='sidebar'>
          <button className='sidebar-link-btn' style={{ background: "rgb(98, 89, 232)" }} >
            <WindowIcon />
            Dashboard
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/Analytics.png' alt='analytics' width="20" height="20" />Analytics
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/wallet.png' alt='my-wallet' width="20" height="20" />My Wallet
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/user.png' alt='accounts' width="20" height="20" />Accounts
          </button>
          <button className='sidebar-link-btn'>
            <img src='/images/setting.png' alt='setting' width="20" height="20" />Settings
          </button>
        </div>
      </div>
      <div className='main-section'>
        <div className='sidebar-toggle-btn-container'>
          <button className='sidebar-toggle-btn'>
            <DehazeOutlinedIcon sx={{ fontSize: "35px" }} onClick={() => setSideBarActive(true)} />
          </button>
          <h1 className='logo-title'>Logo</h1>
        </div>
        <div className='header-container'>
          <div className='heading-container-col'>
            <h1 className='heading'>Welcome Back, Beni</h1>
            <p className='welcome-tag'>Here's what's happening with your store today</p>
          </div>
          <div>
            <div className='search-input-container'>
              <input placeholder='Search for anything....' className='search-input' />
              <button className='search-btn'>
                <SearchIcon sx={{ color: "white", fontSize: "18px" }} />
              </button>
            </div>
          </div>
        </div>
        <div className='user-data-container'>
          <div className='stock-info-container'>
            <div className='stock-info'>
              <div className='income-data-container'>
                <div className='indicator-icon' style={{ background: "rgb(100, 208, 247)" }}>
                  <CallReceivedIcon />
                </div>
                <div className='flex-col'>
                  <p style={{ fontSize: "13px", color: "rgb(136, 133, 176)" }}>Total Income</p>
                  <div className='flex-row'>
                    <p className='amount'>$632.000</p>
                    <p className='income-percentage'>+1.29%</p>
                  </div>
                </div>
              </div>
              <div className='outcome-data-container'>
                <div className='indicator-icon' style={{ background: "rgb(98, 89, 232)" }}>
                  <CallMadeIcon />
                </div>
                <div className='flex-col'>
                  <p style={{ fontSize: "13px", color: "rgb(136, 133, 176)" }}>Total Outcome</p>
                  <div className='flex-row'>
                    <p className='amount'>$632.000</p>
                    <p className='outcome-percentage'>+1.29%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='transaction-info-container'>
              <div className='tarsaction-header'>
                <h1>Transaction</h1>
                <div className='flex-row'>
                  <div className='search-input-container-2'>
                    <input placeholder='Search for anything....' className='search-input-2' />
                    <button className='search-btn'><SearchIcon sx={{ color: "rgb(139, 137, 179)", fontSize: "20px" }} /></button>
                  </div>
                  <button className='Calender-btn'>
                    < CalendarMonthOutlinedIcon sx={{ fontSize: "22px", paddingRight: "3px" }} />
                    May 10- May 20
                    <KeyboardArrowDownIcon sx={{ paddingLeft: "12px", fontSize: "35px" }} />
                  </button>
                </div>
              </div>
              <table className='transaction-details-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adobe After Effect</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80</td>
                    <td>
                      <p className='deposited-tag'>
                        Deposited
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Mcdonald's</td>
                    <td>Fri,19 Apr 2020</td>
                    <td>$7.03</td>
                    <td>
                      <p className='deposited-tag'>
                        Deposited
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Levi's</td>
                    <td>Tue,19 Apr 2020</td>
                    <td>$30.09</td>
                    <td>
                      <p className='deposited-tag'>
                        Deposited
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='transaction-info-container-1'>
              <div className='tarsaction-header'>
                <h1>Transaction</h1>
                <div className='flex-row'>
                  <div className='search-input-container-2'>
                    <input placeholder='Search for anything....' className='search-input-2' />
                    <button className='search-btn'><SearchIcon sx={{ color: "rgb(139, 137, 179)", fontSize: "20px" }} /></button>
                  </div>
                  <button className='Calender-btn'>
                    < CalendarMonthOutlinedIcon sx={{ fontSize: "22px", paddingRight: "3px" }} />
                    May 10- May 20
                    <KeyboardArrowDownIcon sx={{ paddingLeft: "12px", fontSize: "35px" }} />
                  </button>
                </div>
              </div>
              <table className='transaction-details-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adobe After Effect</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80</td>
                    <td>
                      <p className='deposited-tag'>
                        Deposited
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Mcdonald's</td>
                    <td>Fri,19 Apr 2020</td>
                    <td>$7.03</td>
                    <td>
                      <p className='deposited-tag'>
                        Deposited
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Levi's</td>
                    <td>Tue,19 Apr 2020</td>
                    <td>$30.09</td>
                    <td>
                      <p className='deposited-tag'>
                        Deposited
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='user-account-details-container'>
            <div className='user-card-details'>
              <h1 className='heading'>My Card</h1>
              <p className='card-balance-tag'>Card Balance</p>
              <p className='amount-2'>$15,595.015</p>
              <div className='card-container'>
                <p className='balance-tag'>Current Balance</p>
                <p className='amount-3'>$5,750,20</p>
                <div className='card-details'>
                  <p>5282 3456 7890 1289</p>
                  <p>09/25</p>
                </div>
              </div>
              <div className='buttons-row'>
                <button className='purple-btn'>Manage Cards</button>
                <button className='outline-btn'>Transfer</button>
              </div>
            </div>
            <div className='user-activity-bar'>
              <div className='flex-row-2'>
                <h2>Activity</h2>
                <button className='outline-btn-2'>Month
                  <KeyboardArrowDownIcon sx={{ color: "rgb(153, 151, 195)" }} /></button>
              </div>
              <div className='activity-bar'>
                <div className="circle">
                  <div className="percentage-container">
                    <h1>65%</h1>
                  </div>
                </div>
              </div>
              <div className='flex-row' style={{ gap: "10px" }}>
                <span className='payment-color-indicator'></span>
                <p>Daily payment</p>
              </div>
              <button className='outline-btn' style={{ fontSize: "16px", fontWeight: "500" }}>View all activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
