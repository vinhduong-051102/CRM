import iconWarning from '../../images/icon/icon-warning2.svg';
import iconClock from '../../images/icon/icon-clock.svg';
import iconBag from '../../images/icon/icon-bag.svg';
import iconRice from '../../images/icon/icon-rice.svg';
import iconClockGray from '../../images/icon/icon-clock-gray.svg';
import iconCalender from '../../images/icon/icon-calender.svg';

export const CONTENT = 'Content';
export const DEADLINE = 'Deadline';
export const STATUS = 'Status';
export const DATA_CARD = [
  {
    iconTitle: iconClock,
    titleIcon: 'Thời Gian Hoạt động ',
    onValue: '08h20-17h30',
    titleTime: 'Quẹt thẻ đến',
    lateTime: 'Muộn',
  },
  {
    iconTitle: iconBag,
    titleIcon: 'Hồ Sơ',
    titleContent: 'Hồ sơ',
    titleContent1: 'Đối tượng ký',
    titleContent2: 'Đã ký',
  },
  {
    iconTitle: iconRice,
    titleIcon: 'eFood',
    titleContent: 'Thực đơn hôm nay',
    titleContent1: 'Số suất',
  },
  {
    iconTitle: iconBag,
    titleIcon: 'Đi công tác',
    onValue: 'Đà nẵng',
    onValue1: '04/07-07/08',
  },
  {
    iconTitle: iconClockGray,
    titleIcon: 'Phiếu đi muộn',
    titleTime: 'Thời gian',
    titleContent: 'Làm bù',
  },
  {
    iconTitle: iconWarning,
    titleIcon: 'Phạt Tiền',
    onValue: '200.000 VNĐ',
    onValue1: 'Không quẹt thẻ đầu buổi chiều',
  },
  {
    iconTitle: iconRice,
    titleIcon: 'eFood',
    titleContent: 'Thực đơn hôm nay',
    titleContent1: 'Số suất',
  },
  {
    iconTitle: iconCalender,
    titleIcon: 'Phiếu nghỉ phép',
    titleContent: 'Chế độ',
    titleTime: 'thời gian',
  },
];
