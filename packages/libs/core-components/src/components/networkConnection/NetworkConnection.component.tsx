import classnames from 'classnames';
import { BiWifi, BiWifiOff } from 'react-icons/bi';
import { useNetworkState } from 'react-use';

type NetworkConnectionProps = {
  onlineColor?: string;
  offlineColor?: string;
};

export function NetworkConnection(props: NetworkConnectionProps) {
  const state = useNetworkState();
  const iconSizeClasses = 'h-8 w-8 md:h-9 md:w-9';

  return (
    <div id="iconContainer" className="ml-5 flex items-center">
      {state.online ? (
        <BiWifi
          className={classnames(
            iconSizeClasses,
            props.onlineColor ? props.onlineColor : 'text-green-500'
          )}
          title="Online"
        />
      ) : (
        <BiWifiOff
          className={classnames(
            iconSizeClasses,
            props.offlineColor ? props.offlineColor : 'text-red-500'
          )}
          title="Offline, Please check internet connection"
        />
      )}
    </div>
  );
}

export default NetworkConnection;
