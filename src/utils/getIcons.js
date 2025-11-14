import { divIcon } from "leaflet";

const getIcon = (deg, isActive, isDetail) => {
  return divIcon({
    html: `
    <div style="transform: rotate(${deg - 45}deg)">
    
    <img src="/plane.svg" width="30px" height="30px"/>
    </div>
    `,
    className: `marker ${isDetail && "passive"} ${isActive && "active-flight"}`,
  });
};

export { getIcon };
