export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center">
            <h1>Profile</h1>
            <hr />
            <p>profile page{params.id}</p>
        </div>
    )
}