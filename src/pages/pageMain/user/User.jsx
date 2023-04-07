import './User.scss'

const data = [
  {
    country: 'U',
    Name: 'User User',
    id: '4545435',
    data: '22.01.2023',
    time: '22:43',
  },
]

const User = ({ data }) => {
  return (
    <div className="user">
      <div className="user__circle-img">U</div>
      <div className="user__info">
        <p className="user__info_name">User User</p>
        <p className="user__info_id">ID: 56789085</p>
      </div>
      <div className="user__time">
        <time className="user__time_data">22.01.2023</time>
        <time className="user__time_time">22:43</time>
      </div>
    </div>
  )
}

export default User
