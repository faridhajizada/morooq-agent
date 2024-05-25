import { useUserQuery } from './../../../api/userApi';
import { useDepartmentIdQuery } from './../../../api/departmentApi';
import { usePositionIdQuery } from './../../../api/positionApi';

// TODO: ADD ID TO PATH -- CANT ADD THEM TO DUE TO WILDCART

const ProfileInfo = () => {
  const { data: userData, isLoading, isSuccess, error } = useUserQuery();
  console.log('🚀 ~ ProfileInfo ~ userData:', userData);

  const formattedBirthDate = userData?.birthdate
    ? new Date(userData.birthdate).toISOString().split('T')[0]
    : '...Loading';

  //TODO: ADD LOADING SPINER
  return (
    <div>
      <h1>User Info</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : isSuccess ? (
        <div>
          <p>{userData?.userName}</p>
          <p>{userData?.userName}</p>
          <p>{userData?.firstName}</p>
          <p>{userData?.lastName}</p>
          <p>{userData?.fatherName}</p>
          <p>{userData?.email}</p>
          <p>{userData?.phoneNumber1}</p>
          <p>{userData?.phoneNumber1}</p>
          <p>{userData?.phoneNumber2}</p>
          <p>{formattedBirthDate}</p>
          <p>{userData?.genderId}</p>
          <p>{userData?.departamentId}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileInfo;
