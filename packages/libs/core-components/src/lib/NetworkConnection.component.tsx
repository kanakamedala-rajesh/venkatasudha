import classnames from 'classnames';
import { BiWifi, BiWifiOff } from 'react-icons/bi';
import { useNetworkState } from 'react-use';
import SafeHydrate from './SafeHydrate';

type NetworkConnectionProps = {
  onlineColor?: string;
  offlineColor?: string;
};

export function NetworkConnectionIcon(props: NetworkConnectionProps) {
  const state = useNetworkState();
  const iconSizeClasses = 'h-8 w-8 md:h-9 md:w-9';

  return (
    <SafeHydrate>
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
    </SafeHydrate>
  );
}

export default NetworkConnectionIcon;
