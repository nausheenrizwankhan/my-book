---
id: python-ros-bridging
title: 2. Python-ROS Bridging
sidebar_position: 2
---

# 2. Python–ROS Control Bridging with RePLY

This chapter explains how to connect Python agents to ROS 2 using the RePLY library.

## RePLY Overview

RePLY is a Python library that provides a simple and efficient way to bridge the gap between Python and ROS 2. It allows you to create ROS 2 nodes, publishers, and subscribers in your Python code, and to exchange messages with other ROS 2 nodes.

## Installation

To get started, you will need to install the RePLY library. You can do this using pip:

```bash
pip install reply
```

## Example Usage

Here is a simple example of how to use RePLY to create a ROS 2 publisher in Python:

```python
import reply

# Create a ROS 2 node
node = reply.Node('my_python_node')

# Create a publisher
publisher = node.create_publisher('/my_topic', 'std_msgs/String')

# Publish a message
publisher.publish('Hello, ROS 2!')
```
