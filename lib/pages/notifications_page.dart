import 'package:flutter/material.dart';

class NotificationsPage extends StatelessWidget {
  const NotificationsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        title: const Text(
          'Notifications',
          style: TextStyle(
            color: Colors.black,
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: Colors.black),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        children: [
          // New Notifications
          Container(
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text(
                    'New',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                ...List.generate(
                  4,
                  (index) => _buildNotification(index, isNew: true),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),

          // Earlier Notifications
          Container(
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text(
                    'Earlier',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                ...List.generate(
                  8,
                  (index) => _buildNotification(index + 4, isNew: false),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNotification(int index, {required bool isNew}) {
    final List<NotificationData> notifications = [
      NotificationData(
        name: 'Sarah Johnson',
        action: 'liked your post',
        time: '5m',
        icon: Icons.thumb_up,
        iconColor: Colors.blue,
        hasImage: true,
      ),
      NotificationData(
        name: 'Mike Wilson',
        action: 'commented on your photo',
        time: '12m',
        icon: Icons.comment,
        iconColor: Colors.green,
        hasImage: true,
      ),
      NotificationData(
        name: 'Emma Davis',
        action: 'sent you a friend request',
        time: '1h',
        icon: Icons.person_add,
        iconColor: Colors.orange,
        hasImage: false,
      ),
      NotificationData(
        name: 'John Smith',
        action: 'shared your post',
        time: '2h',
        icon: Icons.share,
        iconColor: Colors.purple,
        hasImage: true,
      ),
      NotificationData(
        name: 'Lisa Anderson',
        action: 'tagged you in a photo',
        time: '3h',
        icon: Icons.local_offer,
        iconColor: Colors.red,
        hasImage: true,
      ),
      NotificationData(
        name: 'David Brown',
        action: 'liked your comment',
        time: '5h',
        icon: Icons.thumb_up,
        iconColor: Colors.blue,
        hasImage: false,
      ),
      NotificationData(
        name: 'Jessica Miller',
        action: 'posted in your group',
        time: '1d',
        icon: Icons.group,
        iconColor: Colors.teal,
        hasImage: true,
      ),
      NotificationData(
        name: 'Ryan Taylor',
        action: 'reacted to your story',
        time: '1d',
        icon: Icons.favorite,
        iconColor: Colors.pink,
        hasImage: false,
      ),
      NotificationData(
        name: 'Amanda Garcia',
        action: 'mentioned you in a comment',
        time: '2d',
        icon: Icons.alternate_email,
        iconColor: Colors.indigo,
        hasImage: true,
      ),
      NotificationData(
        name: 'Chris Martinez',
        action: 'invited you to an event',
        time: '2d',
        icon: Icons.event,
        iconColor: Colors.amber,
        hasImage: false,
      ),
      NotificationData(
        name: 'Olivia Rodriguez',
        action: 'started following you',
        time: '3d',
        icon: Icons.person_add,
        iconColor: Colors.orange,
        hasImage: false,
      ),
      NotificationData(
        name: 'James Hernandez',
        action: 'liked your profile picture',
        time: '3d',
        icon: Icons.thumb_up,
        iconColor: Colors.blue,
        hasImage: true,
      ),
    ];

    final notification = notifications[index % notifications.length];

    return Container(
      color: isNew ? Colors.blue[50] : Colors.white,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        child: Row(
          children: [
            // Profile Picture with Action Icon
            Stack(
              children: [
                CircleAvatar(
                  radius: 25,
                  backgroundColor: Colors.grey[300],
                  child: const Icon(
                    Icons.person,
                    color: Colors.white,
                    size: 25,
                  ),
                ),
                Positioned(
                  bottom: 0,
                  right: 0,
                  child: Container(
                    padding: const EdgeInsets.all(4),
                    decoration: BoxDecoration(
                      color: notification.iconColor,
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 2),
                    ),
                    child: Icon(
                      notification.icon,
                      size: 12,
                      color: Colors.white,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(width: 12),

            // Notification Content
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  RichText(
                    text: TextSpan(
                      style: const TextStyle(color: Colors.black, fontSize: 16),
                      children: [
                        TextSpan(
                          text: notification.name,
                          style: const TextStyle(fontWeight: FontWeight.bold),
                        ),
                        TextSpan(text: ' ${notification.action}'),
                      ],
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    notification.time,
                    style: TextStyle(color: Colors.grey[600], fontSize: 14),
                  ),
                ],
              ),
            ),

            // Post Thumbnail (if applicable)
            if (notification.hasImage)
              Container(
                width: 50,
                height: 50,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  color: Colors.grey[200],
                ),
                child: Icon(Icons.image, color: Colors.grey[400]),
              ),

            // More Options
            IconButton(
              icon: const Icon(Icons.more_horiz, color: Colors.grey),
              onPressed: () {},
            ),
          ],
        ),
      ),
    );
  }
}

class NotificationData {
  final String name;
  final String action;
  final String time;
  final IconData icon;
  final Color iconColor;
  final bool hasImage;

  NotificationData({
    required this.name,
    required this.action,
    required this.time,
    required this.icon,
    required this.iconColor,
    required this.hasImage,
  });
}
