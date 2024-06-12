const profileUserData = (user) => {
  return [
    {
      image: 'birthday-cake',
      label: 'Birth date',
      textValue: user?.birthDate,
    },
    {
      image: 'mars',
      label: 'Gender',
      textValue: user?.gender,
    },
    {
      image: 'phone',
      label: 'Contact',
      textValue: user?.phone,
    },
    {
      image: 'graduation-cap',
      label: 'Studied at',
      textValue: user?.university,
    },
    {
      image: 'map-marker',
      label: 'From',
      textValue: user?.address?.country,
    },
    {
      image: 'map-marker',
      label: 'Work at',
      textValue: user?.company?.address?.city,
    },
    {
      image: 'briefcase',
      label: 'Work as a',
      textValue: user?.company?.title,
    }
  ];
};

export default profileUserData;
