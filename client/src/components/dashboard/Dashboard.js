import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../redux/actions/profile.actions';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user '></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>has </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile!</p>
          <Link className='btn btn-primary my-1' to='/create-profile'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth, profile }) => ({
  auth,
  profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
