import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="bg-blue-100 w-screen h-fit align-middle p-12">
      <div className="flex justify-center text-4xl font-bold">
        <div class="text-center">
          TurtleBot AutoRace Command
          <p class="text-xl">- Gachon Univ. Shcool of Computing. StormDongSeok</p>
        </div>
      </div>

      <div class="flex flex-wrap py-4 h-auto w-full place-content-between" >
        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">8.2.1 Camera Calibration</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="rqt_image_view" />
        </div>

        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">8.2.2 Intrinsic Camera Calibration</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=calibration" />
        </div>

        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">8.2.3 Extrinsic Camera Calibration</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=calibration" />
          <Component text="rqt" />
          <Component text="rosrun rqt_reconfigure rqt_reconfigure" />

        </div>

        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">8.2.4 Check Calibration Result</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="rqt" />
        </div>

        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">8.3 Lane Detection</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_lane.launch mode:=calibration" />
        </div>

        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">8.3 Lane Detection With Actual TurtleBot3</p>
          <p> Close rosrun rqt_reconfigure rqt_reconfigure roslaunch turtlebot3_autorace_detect detect_lane.launch mode:=calibration</p>
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_detect detect_lane.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_driving turtlebot3_autorace_control_lane.launch" />
          <Component mode="SBC" text="roslaunch turtlebot3_bringup turtlebot3_robot.launch" />
        </div>

        <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 1 : Intersection</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_sign.launch mission:=intersection" />
          <Component text="rqt_image_view" />
          <Component mode="Hint" text="roslaunch turtlebot3_autorace_core turtlebot3_autorace_core.launch mission:=intersection" />
      </div>

      <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 2 : Traffic Lights</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_traffic_light.launch mode:=calibration" />
      </div>

      <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 2 : Traffic Lights - Test</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_traffic_light.launch" />
          <Component text="rqt_image_view" />
          <Component mode="Hint" text="roslaunch turtlebot3_autorace_core turtlebot3_autorace_core.launch mission:=traffic_light" />
      </div>

      <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 3 : Level Crossing</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_level_crossing.launch mode:=calibration" />
      </div>

      <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 3 : Level Crossing - Test</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_level_crossing.launch" />
          <Component text="rqt_image_view" />
          <Component mode="Hint" text="roslaunch turtlebot3_autorace_core turtlebot3_autorace_core.launch mission:=level_crossing" />
      </div>

      <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 4 : Construction</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_sign.launch mission:=construction" />
          <Component mode="Hint" text="roslaunch turtlebot3_autorace_core turtlebot3_autorace_core.launch mission:=construction" />

      </div>

      <div class="flex flex-wrap bg-blue-200 h-80 mt-4 rounded-3xl px-8 py-4 h-auto w-96" >
          <p class="text-lg font-bold text-red-500">Mission 5 : Parking</p>
          <Component mode="Remote PC" text="roscore" />
          <Component mode="SBC" text="roslaunch turtlebot3_autorace_camera raspberry_pi_camera_publish.launch" />
          <Component mode="Remote PC" text="roslaunch turtlebot3_autorace_camera intrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_camera extrinsic_camera_calibration.launch mode:=action" />
          <Component text="roslaunch turtlebot3_autorace_detect detect_sign.launch mode:=parking" />
          <Component mode="Hint" text="roslaunch turtlebot3_autorace_core turtlebot3_autorace_core.launch mission:=parking" />

      </div>

      </div>

    </div>
  );
}

export default App;
