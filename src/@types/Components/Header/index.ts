import { Dispatch } from "react";
import { TouchableOpacityProps } from "react-native";

import { Task } from "../../Screens/Home";

export default interface HeaderProps extends TouchableOpacityProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
