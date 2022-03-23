import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

import { YearGroupInfo } from "./YearGroupInfo";

export const ChildProfileCard = ({ childData }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Avatar
        alt="teacher signup"
        src={childData?.profileImageUrl}
        sx={{ alignSelf: "center", width: 150, height: 150 }}
      />
      <Divider variant="middle" sx={{ m: "20px", color: "black" }} />
      <YearGroupInfo yearGroupData={childData.yearGroup} />
    </Stack>
  );
};
