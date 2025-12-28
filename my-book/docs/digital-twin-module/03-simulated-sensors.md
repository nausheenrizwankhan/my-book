---
id: simulated-sensors
title: 3. Simulated Sensors for Humanoid Robots
sidebar_position: 3
---

# 3. Simulated Sensors for Humanoid Robots

This chapter delves into the simulation of various sensors commonly used in humanoid robots, such as LiDAR, depth cameras, and Inertial Measurement Units (IMUs).

## LiDAR Simulation

LiDAR (Light Detection and Ranging) sensors measure distance by illuminating a target with laser light and measuring the reflection with a sensor. In simulation, LiDAR can be modeled by casting rays from the sensor's position into the environment and detecting intersections with virtual objects. This provides a point cloud representation of the surroundings.

## Depth Camera Simulation

Depth cameras provide a depth map of the scene, where each pixel corresponds to the distance from the camera to the object. In simulation, this can be achieved by rendering the scene from the camera's perspective and encoding the distance information into the pixel values. Popular depth camera types include stereo cameras, structured light cameras, and time-of-flight cameras.

## IMU Simulation

An IMU (Inertial Measurement Unit) typically consists of accelerometers and gyroscopes, providing information about the robot's orientation, angular velocity, and linear acceleration. In simulation, IMU data can be derived directly from the simulated robot's state (position, velocity, orientation) within the physics engine, with options to add realistic noise and biases.
