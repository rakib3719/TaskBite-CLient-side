# TaskBite

## Admin Login Credentials
- **Username**: admin@gmail.com
- **Password**: 1234aA

## Live Site URL
[TaskBite Live Site](https://task-bite.web.app/)

## Features

### Worker Features
1. **View Available Coins**: Workers can see their total available coins, which represent their earnings on the platform.
2. **Total Submissions**: Workers can track the total number of submissions they have made, giving them insight into their productivity.
3. **Total Earnings**: Displays the sum of the payable amounts of the worker where the status is approved, providing an overview of their cumulative earnings.
4. **My Submissions**: Shows all the submissions information from the submission collection where the worker's email matches the current worker's email in a tabular form, allowing workers to review their past submissions easily.
5. **Submit Tasks**: Workers can submit tasks, which are then saved in the database based on the worker's email, enabling them to contribute to projects and earn rewards.
6. **Withdrawals**: Workers can withdraw their earnings, with 20 coins equating to 1 dollar. They can choose to withdraw payments through Bkash, Nagad, or Rocket, providing flexibility in accessing their funds.
7. **Payment System**: Workers can withdraw payments with Nagad, Bkash, or Rocket, ensuring convenient and accessible withdrawal options.

### Task-Creator Features
8. **View Available Coins**: Task creators can see their available coins, giving them visibility into their budget for creating tasks and paying workers.
9. **Pending Tasks**: Displays the sum of all task quantities of the tasks they have added, helping task creators keep track of pending work and manage their workload effectively.
10. **Total Payment Paid**: Shows the total amount paid by the task creator, providing insight into their expenditure on task completion.
11. **Tasks to Review**: Task creators can see all review requests of their tasks where the status is “pending” in a table format, allowing them to review and manage task submissions efficiently.
12. **Approve/Reject Submissions**: Task creators can approve or reject worker submissions. Approved tasks' amounts are added to the worker's account, ensuring fair and timely compensation.
13. **Add New Tasks**: Task creators can add new tasks with specific instructions, deadlines, and reward amounts, empowering them to create diverse and engaging tasks for workers.
14. **Update and Delete Tasks**: Task creators can update or delete their tasks as needed, enabling them to modify task details or remove tasks that are no longer relevant.

### Admin Features
15. **Admin Dashboard**: Displays the count of total users, total coins, and total payments, providing administrators with key metrics for monitoring platform activity.
16. **Withdraw Requests**: Admin can view all withdrawal requests in a table format and process payments. Successful payments automatically delete the request, streamlining the payment process.
17. **Manage Users**: Admin can view all users with their details, remove users, and update user roles, ensuring efficient user management and platform administration.
18. **Manage Tasks**: Admin can view all tasks in a table format, delete tasks, and view task details, giving them control over task management and oversight.

### Notification System
19. **User Notifications**: Users receive notifications for task approvals, rejections, and withdrawals in a floating pop-up, ensuring they stay informed about important updates.
20. **Admin Notifications**: Admin receives notifications for user reports and system changes, enabling them to respond promptly to user issues and platform updates.

### Payment Features
21. **Purchase Coins**: Users can purchase coins through a Stripe-based payment system. Available options include various coin packages, providing flexibility in purchasing options.
22. **Payment History**: Users can view all their payment transactions in a tabular format, allowing them to track their payment history and manage their finances effectively.

## Technical Overview
### Worker Withdrawal System
- **Withdrawal Conversion**: 20 coins = 1 dollar.
- **Validation**: Ensures withdrawal amount does not exceed the maximum allowed.
- **Form Handling**: Inserts withdrawal request information into `withdrawCollection`.

### Task Review System
- **Review Requests**: Displays pending review requests to task creators.
- **Approval Process**: Approves task submissions, increases worker's payable amount, and updates submission status.
- **Rejection Process**: Updates submission status to "rejected".

### Payment and Coin Purchase
- **Stripe Integration**: Secure payment processing through Stripe.
- **Payment Plans**: Offers various coin packages for purchase.

### Notifications
- **User Notifications**: For task-related updates and withdrawals.
- **Admin Notifications**: For user management and system changes.

## User Roles
### Worker
- Complete tasks, submit for review, earn coins, and withdraw earnings.
### Task-Creator
- Create tasks, review submissions, approve/reject tasks, and manage task payments.
### Admin
- Oversee platform operations, manage users and tasks, process withdrawals, and handle system notifications.

## Conclusion
WorkTasker provides a comprehensive platform for micro-tasking and earning, with specific functionalities tailored to workers, task creators, and admins. The platform ensures seamless task management, secure payment processing, and efficient user management.

For any issues or support, please contact our support team at support@worktasker.com.
