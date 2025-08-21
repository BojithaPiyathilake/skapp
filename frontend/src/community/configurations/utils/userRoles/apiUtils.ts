import { DropdownListType } from "~community/common/types/CommonTypes";
import {
  AllowedGrantableRolesResponseType,
  AllowedGrantableRolesType
} from "~community/configurations/types/UserRolesTypes";

export const transformRolesToDropdownFormat = (
  rolesData: AllowedGrantableRolesResponseType[]
): AllowedGrantableRolesType => {
  const result: AllowedGrantableRolesType = {
    leave: [],
    people: [],
    attendance: [],
<<<<<<< HEAD
    esign: [],
    okr: []
=======
    esign: []
>>>>>>> f276ff75fe121543856a52563da2034b02eb0e07
  };

  rolesData.forEach((moduleData) => {
    const moduleKey =
      moduleData.module.toLowerCase() as keyof AllowedGrantableRolesType;

    const dropdownOptions: DropdownListType[] = moduleData.roles.map(
      (role) => ({
        value: role.role,
        label: role.name
      })
    );

    if (moduleKey in result) {
<<<<<<< HEAD
      result[moduleKey] = dropdownOptions as any;
=======
      result[moduleKey] = dropdownOptions;
>>>>>>> f276ff75fe121543856a52563da2034b02eb0e07
    }
  });

  return result;
};
