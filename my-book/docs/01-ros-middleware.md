---
id: ros-2-middleware
title: 1. ROS 2 Middleware
sidebar_position: 1
---

# 1. ROS 2 Middleware

This chapter explains the core concepts of ROS 2, including nodes, topics, and services.

## Nodes

Nodes are the fundamental building blocks of a ROS 2 system. Each node is a process that performs a specific task. For example, you might have a node for controlling a robot's wheels, a node for reading sensor data, and a node for planning a path.

## Topics

Topics are named buses over which nodes exchange messages. Nodes can publish messages to a topic or subscribe to a topic to receive messages. This is the primary way that data is transported between nodes in a ROS 2 system.

## Services

Services are another way for nodes to communicate with each other. They are based on a request-reply model, where one node (the client) sends a request to another node (the server) and waits for a reply. This is useful for when you need to perform a remote procedure call.
