import menuItems from '../../data/menuItems';
import DrawerMenuItem from "./DrawerMenuItem";
import DrawerBase from "./DrawerBase";

function Drawer({ setIsDrawerOpen }) {
  return (
    <DrawerBase setIsDrawerOpen={setIsDrawerOpen}>
      {menuItems.map((item, index) => (
        <DrawerMenuItem key={index} item={item} setIsDrawerOpen={setIsDrawerOpen} />
      ))}
    </DrawerBase>
  );
}

export default Drawer;
