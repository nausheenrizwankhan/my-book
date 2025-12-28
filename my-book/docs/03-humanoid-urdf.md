---
id: humanoid-urdf
title: 3. Humanoid URDF
sidebar_position: 3
---

# 3. Humanoid URDF

This chapter explains the basics of URDF for humanoid robots.

## What is URDF?

URDF (Unified Robot Description Format) is an XML format for representing a robot model. It is used to describe the physical properties of a robot, such as its links, joints, and sensors.

## Humanoid URDF

For a humanoid robot, the URDF file will typically define the robot's torso, arms, legs, and head as a series of links and joints. It will also specify the robot's kinematic and dynamic properties, such as the joint limits and motor torques.

## Example URDF

Here is a simple example of a URDF file for a humanoid robot:

```xml
<robot name="my_humanoid">
  <link name="torso">
    ...
  </link>
  <link name="left_arm">
    ...
  </link>
  <joint name="left_shoulder" type="revolute">
    ...
  </joint>
</robot>
```
