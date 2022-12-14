import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNOtification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNOtification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});

// Código anterior
//
// // repository fake (como se fosse o banco de dados)
// const notificationsRepository = {
//    async create(notification: Notification) {
//      console.log(notification);
//    },
//  };

//  describe('Send notification', () => {
//    it('should be able to send a notification', async () => {
//      const sendNotification = new SendNOtification(notificationsRepository);

//      const { notification } = await sendNotification.execute({
//        content: 'This is a notification',
//        category: 'social',
//        recipientId: 'example-recipientId',
//      });

//      expect(notification).toBeTruthy();
//    });
//  });
