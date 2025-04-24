import style from './userProfile.module.css'
import ListUi from '../List.ui'
import ThreadsMessageUi from '../ThreadsMessage.ui'

export default function UserProfileUi({ username, user_threads, user_messages }) {
    return (
        <>
            <div className={`container ${style.profile_container}`}>
                <div className="user_info">
                    <h1>{username}</h1>

                </div>
                <div className="user_threads">
                    <h1>Your Threads:</h1>
                    {
                        user_threads.length > 0 ? (
                            <>
                                <ListUi data={user_threads} title={``} path={'thread'} />
                            </>
                        ) : (
                            <>
                                <h2>You don't have any thread yet</h2>
                            </>
                        )
                    }
                </div>
                <div className="user_messages my-4">
                    <h1>Your Messages:</h1>
                    {
                        user_messages.length > 0 ? (
                            <>
                                {user_messages.map(item => (
                                    <ThreadsMessageUi
                                        username={item.username}
                                        content={item.content}
                                        creation_date={item.creation_date}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                <h2>You don't have any message yet</h2>
                            </>
                        )
                    }
                </div>
            </div >
        </>
    )
}